"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateResponseData_1 = __importDefault(require("./generateResponseData"));
function responseHandler(res, result) {
    const { responseStatusCode, responseData } = (0, generateResponseData_1.default)(result);
    res.status(responseStatusCode).send(responseData);
    return;
}
exports.default = responseHandler;
