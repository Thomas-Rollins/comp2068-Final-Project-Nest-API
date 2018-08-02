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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateBookDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "author", void 0);
__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_validator_1.MinLength(3, { each: true }),
    class_validator_1.ArrayUnique(),
    __metadata("design:type", Array)
], CreateBookDto.prototype, "genres", void 0);
__decorate([
    class_validator_1.IsISO8601(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], CreateBookDto.prototype, "publishdate", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    class_validator_1.IsISBN('10'),
    __metadata("design:type", String)
], CreateBookDto.prototype, "isbn10", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    class_validator_1.IsISBN('13'),
    __metadata("design:type", String)
], CreateBookDto.prototype, "isbn13", void 0);
__decorate([
    class_transformer_1.Transform(value => Number.isNaN(+value) ? 0 : +value),
    class_validator_1.IsInt(),
    class_validator_1.Min(1),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "pagecount", void 0);
__decorate([
    class_transformer_1.Transform(value => Number.isNaN(+value) ? 0 : +value),
    class_validator_1.IsNumber(),
    class_validator_1.Min(1),
    class_validator_1.Max(10),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "rating", void 0);
exports.CreateBookDto = CreateBookDto;
//# sourceMappingURL=create-book.dto.js.map