const mongoose = require('mongoose');

// Example User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  age: {
    type: Number,
    min: [0, 'Age cannot be negative'],
    max: [150, 'Age cannot exceed 150']
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true // This adds createdAt and updatedAt fields automatically
});

// Add index for better query performance
// Note: email index is already created by 'unique: true' in schema definition
// userSchema.index({ email: 1 }); // Removed to prevent duplicate index warning
userSchema.index({ name: 1, isActive: 1 });

// Instance method example
userSchema.methods.getFullProfile = function() {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    age: this.age,
    isActive: this.isActive,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

// Static method example
userSchema.statics.findActiveUsers = function() {
  return this.find({ isActive: true });
};

// Pre-save middleware example
userSchema.pre('save', function(next) {
  console.log(`Saving user: ${this.name}`);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
