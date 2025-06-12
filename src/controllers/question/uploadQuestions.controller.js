import { asyncHandlers } from "../../utils/asyncHandler.utils.js";
import { Question } from '../../models/question.model.js';
import { TestCase } from '../../models/testcases.model.js';
import { ApiResponse } from "../../utils/ApiResponse.js";

const uploadQuestions = asyncHandlers(async (req, res) => {
  const questions = req.body;

  try {
    const responses = [];

    for (const q of questions) {
      const {
        id,
        name,
        difficulty,
        description,
        image,
        example1,
        example2,
        constraints,
        timeComplexity,
        sampleInput,
        sampleOutput,
        testCases
      } = q;

      // Check for duplicate ID
      const existing = await Question.findOne({ id });
      if (existing) {
        responses.push({ id, name, status: 'skipped (duplicate id)' });
        continue;
      }

      // Save question
      const questionDoc = new Question({
        id,
        name,
        difficulty,
        description,
        image,
        example1,
        example2,
        constraints,
        timeComplexity,
        sampleInput,
        sampleOutput
      });

      await questionDoc.save();

      const validTestCases = testCases
        .filter(tc => tc.input && tc.output)
        .map(tc => ({
          question: questionDoc._id,
          input: tc.input,
          output: tc.output,
          explanation: tc.explanation || ""
        }));

      if (validTestCases.length > 0) {
        await TestCase.insertMany(validTestCases);
      }

      responses.push({ id, name, status: 'uploaded' });
    }
    res.status(201).json({ message: 'Upload complete', data: responses });
  } catch (err) {
    console.error("Bulk upload error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export { uploadQuestions };
