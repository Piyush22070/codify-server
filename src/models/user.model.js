import mongoose,{Schema} from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    avatar : {
        type : String,// cloudianary url
        required : true,
    },
    role: {
      type: String,
      required: true,
      enum: ['admin', 'user', 'guest']  // Example roles
    },

  });
  
  // Middleware to update updatedAt field
  userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }
    this.password = await bcrypt.hash(this.password,10)
    next()
})
userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.password)
}


export const User = mongoose.model("User",userSchema) 