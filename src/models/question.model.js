import mongoose, { Schema } from "mongoose";

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
    enum: ['easy', 'medium', 'hard'], 
    required: true },
  likeCount: { 
    type: Number, 
    default: 0 
},
  dislikeCount: { 
    type: Number, 
    default: 0 
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
    input: { 
        type: String, 
        required: true 
    },
    output: { 
        type: String, 
        required: true 
    },
    explanation: { 
        type: String, 
        required: true 
    }
  },
  example2: {
    input: { 
        type: String, 
        required: true 
    },
    output: { 
        type: String, 
        required: true 
    },
    explanation: { 
        type: String, 
        required: true 
    }
  },
  constraints: { 
    type: String, 
    required: true 
},
  timeComplexity: { 
    type: String, 
    required: true 
},
  accepted: { 
    type: Number, 
    default: 0 
},
  submissions: { 
    type: Number, 
    default: 0 
},
  favourite: { 
    type: Boolean, 
    default: false 
},
  sampleInput: { 
    type: String 
},
  sampleOutput: { 
    type: String 
},
  createdAt: { 
    type: Date, default: Date.now 
}
});

export const Question = mongoose.model("Question", questionSchema);
