"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("@/config/constant/exception/book");
const exception_1 = __importDefault(require("@/utils/responseHandler/exception"));
class FailToGetBookException extends exception_1.default {
    constructor() {
        super((0, book_1.failToGetBookException)());
    }
}
exports.default = FailToGetBookException;
