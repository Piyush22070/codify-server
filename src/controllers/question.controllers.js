// Import required modules
import { Question } from "../models/question.model.js";
import { asyncHandlers } from "../utils/asyncHandler.utils.js";
import { questions as demoQuestions } from "./demoData.js"; // Assuming demoQuestions is an array of questions

// Define the controller function
const questions = asyncHandlers(async (req, res) => {
    try {
        // Clear existing data (optional, if needed)
        await Question.deleteMany();
        const insertedQuestions = await Question.insertMany(demoQuestions);
        const question = await Question.find().sort({ createdAt: -1 });
        res.json(question);
        
    } catch (error) {
        console.error('Error importing data:', error);
        res.status(500).json({ message: 'Failed to import questions', error: error.message });
    }
});

export { questions };
