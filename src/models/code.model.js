import mongoose,{Schema} from 'mongoose'

// Define Code Schema
const codeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  likes :{
    type : Number,
    required : true 
  },
  cases: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  language: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  },
  results: {
    type: [String],
    default: []
  }
});

export const Code = mongoose.model('Code', codeSchema);

