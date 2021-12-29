"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getBookList_1 = __importDefault(require("./getBookList"));
const createBook_1 = __importDefault(require("./createBook"));
const updateBook_1 = __importDefault(require("./updateBook"));
const getBook_1 = __importDefault(require("./getBook"));
const deleteBook_1 = __importDefault(require("./deleteBook"));
exports.default = {
    createBook: createBook_1.default,
    getBookList: getBookList_1.default,
    updateBook: updateBook_1.default,
    getBook: getBook_1.default,
    deleteBook: deleteBook_1.default
};
