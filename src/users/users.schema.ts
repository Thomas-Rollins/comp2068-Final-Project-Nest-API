import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Logger } from '@nestjs/common';
import { BookSchema } from '../books/books.schema';

const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  firstName: {
    type: String,
    unique: false,
    required: true,
  },
  lastName: {
    type: String,
    unique: false,
    required: true,
  },
    role: {
      type: String,
      enum: ['User', 'Admin'],
      default: 'User',
    },
  },
);

UserSchema.pre('save', function(next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, (err2, hash) => {
        if (err2) {
          return next(err2);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = async function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    Logger.log('reached comparepassword');
    if (err) return (err);
    cb(null, isMatch);
  });
};

BookSchema.virtual('book_ID').get(function() {
  return this._id;
});

export { UserSchema };