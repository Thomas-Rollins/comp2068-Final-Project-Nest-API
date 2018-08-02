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
//# sourceMappingURL=books.schema.js.map