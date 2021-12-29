"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = __importDefault(require("@/utils/responseHandler/exception"));
const author_1 = require("@/config/constant/exception/author");
class FailToGetAuthorListException extends exception_1.default {
    constructor() {
        super((0, author_1.failToGetAuthorListException)());
    }
}
exports.default = FailToGetAuthorListException;
