"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const author_1 = require("@/config/constant/exception/author");
const exception_1 = __importDefault(require("@/utils/responseHandler/exception"));
class FailToGetAuthorException extends exception_1.default {
    constructor() {
        super((0, author_1.failToGetAuthorException)());
    }
}
exports.default = FailToGetAuthorException;
