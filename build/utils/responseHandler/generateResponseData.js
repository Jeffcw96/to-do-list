"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = __importDefault(require("./exception"));
const SUCCESS_STATUS = 200;
const FAIL_STATUS = 500;
function generateResponseData(result) {
    let responseStatusCode = SUCCESS_STATUS;
    let responseData = "" || {};
    if (result instanceof exception_1.default) {
        // if it's a Exception (formatted error)
        responseStatusCode = result.getStatusCode();
        responseData = result.toJSON();
    }
    else if (result instanceof Error) {
        // if it's normal error such as human error
        responseStatusCode = FAIL_STATUS;
        responseData = {
            error: result.name,
            message: result.message
        };
    }
    else if (result == null) {
        responseStatusCode = SUCCESS_STATUS;
    }
    else {
        // good response
        responseStatusCode = SUCCESS_STATUS;
        if (result instanceof Object || result instanceof String) {
            responseData = result;
        }
        else {
            responseData = result.toString();
        }
    }
    return {
        responseStatusCode,
        responseData
    };
}
exports.default = generateResponseData;
