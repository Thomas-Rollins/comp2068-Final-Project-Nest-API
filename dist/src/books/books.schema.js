"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'The Book must have a title.',
    },
    author: {
        type: String,
        required: 'The Book must have an author.',
    },
    genres: [String],
    synopsis: {
        type: String,
        required: 'The Book must have a synopsis.',
    },
    publishdate: {
        type: Date,
    },
    isbn10: {
        type: String,
        validate: {
            validator: isbn10 => /^$|(?=.{13}$)\d{1,5}([- ])\d{1,7}\1\d{1,6}\1(\d|X)$/.test(isbn10),
            message: '{VALUE} is not a valid ISBN-10.',
        },
    },
    isbn13: {
        type: String,
        validate: {
            validator: isbn13 => /^$|(?=.{17}$)97(?:8|9)([ -])\d{1,5}\1\d{1,7}\1\d{1,6}\1\d$/.test(isbn13),
            message: '{VALUE} is not a valid ISBN-13.',
        },
    },
    pagecount: {
        type: Number,
        min: [1, 'A book cannot have less than 1 page. -.-'],
    },
    rating: {
        type: Number,
        min: [0, 'A book cannot have rating less than 0.'],
        max: [10, 'A book cannot be rated higher than 10'],
    },
});
//# sourceMappingURL=books.schema.js.map