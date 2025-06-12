import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  email:    { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true },
  avatar:   { 
    type: String, 
    required: true 
  }, 
  rank:     { 
    type: Number, 
    required: true 
  },
  country:  { 
    type: String, 
    required: true 
  },
  title:    { 
    type: String, 
    required: true 
  },
  role:     { 
    type: String, 
    required: true,
    enum: ['student', 'professional'] 
  },
  sampleData: [{ type: String }],
  refreshToken: { type: String },
  
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

// Password encryption
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Methods
userSchema.methods.isPasswordCorrect = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    { _id: this._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const User = mongoose.model("User", userSchema);
