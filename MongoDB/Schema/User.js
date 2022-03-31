const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, "Enter the name\n"]
    },
    email:{
        type: String,
        required: true,
        unique: [true, 'This email is already registered']
    },
    password:{
        type: String,
        minlength:[5,"Password length is less than 3 characters\n"],
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const User = mongoose.model('users', UserSchema);      // users is name of the collection of the connected database
  module.exports = User;