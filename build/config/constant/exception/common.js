"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordNotFoundException = exports.failToDeleteRecordException = exports.failToGetRecordException = exports.failToUpdateRecordException = void 0;
function failToUpdateRecordException() {
    return {
        title: 'Fail to update record',
        message: 'Fail to update record',
        errorCode: "COMMON_ERROR_001"
    };
}
exports.failToUpdateRecordException = failToUpdateRecordException;
function failToGetRecordException() {
    return {
        title: 'Fail to get record',
        message: 'Fail to get record',
        errorCode: "COMMON_ERROR_002",
    };
}
exports.failToGetRecordException = failToGetRecordException;
function failToDeleteRecordException() {
    return {
        title: 'Fail to delete record',
        message: 'Fail to delete record',
        errorCode: "COMMON_ERROR_003"
    };
}
exports.failToDeleteRecordException = failToDeleteRecordException;
function recordNotFoundException() {
    return {
        title: 'Record not found',
        message: 'Record not found',
        errorCode: "COMMON_ERROR_004",
        statusCode: 404
    };
}
exports.recordNotFoundException = recordNotFoundException;
