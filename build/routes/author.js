"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const author_1 = __importDefault(require("@/controller/author"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/')
    .post(author_1.default.createAuthor);
router.route('/:id')
    .get(author_1.default.getAuthor);
router.route('/:id/books')
    .get(author_1.default.getAuthorWithBooks);
exports.default = router;
