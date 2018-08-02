"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
let BooksService = class BooksService {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookModel.find().exec();
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.bookModel.findById(id);
            if (book == null) {
                throw new common_1.HttpException('404 Not Found: Book does not exist.', common_1.HttpStatus.NOT_FOUND);
            }
            return book;
        });
    }
    create(createBookDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdBook = new this.bookModel(createBookDto);
            return yield createdBook.save();
        });
    }
    update(id, updateBookDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bookModel.update({ _id: id }, updateBookDto, { upsert: false });
            const book = yield this.bookModel.findById(id);
            if (book == null) {
                throw new common_1.HttpException('400 Bad Request: Please reload the page.', common_1.HttpStatus.BAD_REQUEST);
            }
            return book;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.bookModel.findByIdAndRemove(id);
            if (book == null) {
                throw new common_1.HttpException('400 Bad Request: Please reload the page.', common_1.HttpStatus.BAD_REQUEST);
            }
            return book;
        });
    }
};
BooksService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('BookModelToken')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" && _a || Object])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map