"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failToDeleteAuthorException = exports.failToGetAuthorException = exports.failToUpdateAuthorException = exports.failToGetAuthorListException = exports.failToInsertAuthorException = void 0;
function failToInsertAuthorException() {
    return {
        title: 'Fail to insert author',
        message: 'Fail to insert author',
        errorCode: "AUTHOR_ERROR_001"
    };
}
exports.failToInsertAuthorException = failToInsertAuthorException;
function failToGetAuthorListException() {
    return {
        title: 'Fail to get author list',
        message: 'Fail to get author list',
        errorCode: "AUTHOR_ERROR_002"
    };
}
exports.failToGetAuthorListException = failToGetAuthorListException;
function failToUpdateAuthorException() {
    return {
        title: 'Fail to update author list',
        message: 'Fail to update author list',
        errorCode: "AUTHOR_ERROR_003"
    };
}
exports.failToUpdateAuthorException = failToUpdateAuthorException;
function failToGetAuthorException() {
    return {
        title: 'Fail to get author',
        message: 'Fail to get author',
        errorCode: "AUTHOR_ERROR_004"
    };
}
exports.failToGetAuthorException = failToGetAuthorException;
function failToDeleteAuthorException() {
    return {
        title: 'Fail to delete author',
        message: 'Fail to delete author',
        errorCode: "AUTHOR_ERROR_005"
    };
}
exports.failToDeleteAuthorException = failToDeleteAuthorException;
