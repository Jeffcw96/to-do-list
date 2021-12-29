"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./book"));
const author_1 = __importDefault(require("./author"));
exports.default = {
    book: book_1.default,
    author: author_1.default
};
