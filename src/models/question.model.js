import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        required: true
    },
    dislike: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    example1: {
        Input: {
            type: String,
            required: true
        },
        Output: {
            type: String,
            required: true
        },
        Explanation: {
            type: String,
            required: true
        }
    },
    example2: {
        Input: {
            type: String,
            required: true
        },
        Output: {
            type: String,
            required: true
        },
        Explanation: {
            type: String,
            required: true
        }
    },
    Constraints: {
        type: String,
        required: true
    },
    timeComplexity: {
        type: String,
        required: true
    },
    Accepted: {
        type: Number,
        required: true
    },
    Submissions: {
        type: Number,
        required: true
    },
    favourite: {
        type: Boolean,
        default: false
    }
});

export const Question = mongoose.model('Question', questionSchema);


