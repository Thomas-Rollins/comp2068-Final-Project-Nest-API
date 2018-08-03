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
  genres: [String]
  ,
  synopsis: {
    type: String,
    required: 'The Book must have a synopsis.',
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
  rating: {
    type: Number,
  },
});

BookSchema.virtual('book_ID').get(function() {
  return this._id;
});