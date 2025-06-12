import { Question } from "../../models/question.model.js";
import { TestCase } from "../../models/testcases.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandlers } from "../../utils/asyncHandler.utils.js";
import {client} from "../../utils/redisClient.js"; 

const questions = asyncHandlers(async (req, res) => {
  try {
    // Check Redis cache
    const cachedData = await client.get("questions_with_testcases");

    if (cachedData) {
      console.log("Serving from Redis cache...");
      return ApiResponse.success(res, JSON.parse(cachedData));
    }

    // Fetch questions
    const questionDocs = await Question.find().lean();

    // Fetch test cases for all questions
    const questionIds = questionDocs.map(q => q._id);
    const testCases = await TestCase.find({ question: { $in: questionIds } }).lean();

    // Group test cases by question ID
    const testCasesByQuestion = {};
    for (const tc of testCases) {
      const qId = tc.question.toString();
      if (!testCasesByQuestion[qId]) testCasesByQuestion[qId] = [];
      testCasesByQuestion[qId].push({
        input: tc.input,
        output: tc.output,
        explanation: tc.explanation || ""
      });
    }

    // Merge test cases into corresponding questions
    const result = questionDocs.map(q => ({
      ...q,
      testCases: testCasesByQuestion[q._id.toString()] || []
    }));

    // Store in Redis cache for 10 minutes (600 seconds)
    await client.set("questions_with_testcases", JSON.stringify(result), "EX", 600);

    res.json(result);
  } catch (error) {
    console.error("Error fetching questions:", error.message);
    res.status(500).json({ message: "Failed to fetch questions", error: error.message });
  }
});

export { questions };
