"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = __importDefault(require("@/utils/responseHandler/exception"));
const common_1 = require("@/config/constant/exception/common");
class FailToUpdateBookException extends exception_1.default {
    constructor() {
        super((0, common_1.failToUpdateRecordException)());
    }
}
exports.default = FailToUpdateBookException;
