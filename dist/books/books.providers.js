"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const books_schema_1 = require("./books.schema");
exports.booksProviders = [
    {
        provide: 'BookModelToken',
        useFactory: (connection) => connection.model('Book', books_schema_1.BookSchema),
        inject: ['DbConnectionToken'],
    },
];
//# sourceMappingURL=books.providers.js.map