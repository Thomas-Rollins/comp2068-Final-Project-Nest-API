import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: {
    type: String,
      required: 'The Book must have a title.',
  },
  author: {
    type: String,
      required: 'The Book must have an author.',
  },
  genres: {
    type: String,
  }
  ,
  synopsis: {
    type: String,
  },
  publishdate: {
    type: Date,
  },
  isbn10: {
    type: String,
  },
  isbn13: {
    type: String,
  },
  pagecount: {
    type: Number,
  },
  status: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
});

BookSchema.virtual('book_ID').get(function() {
  return this._id;
});