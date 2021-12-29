"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("../controller/book"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/:author_id/book')
    .post(book_1.default.createBook)
    .get(book_1.default.getBookList);
router.route('/:author_id/book/:id')
    .get(book_1.default.getBook)
    .put(book_1.default.updateBook)
    .delete(book_1.default.deleteBook);
exports.default = router;
