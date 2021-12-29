"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failToDeleteBookException = exports.failToGetBookException = exports.failToUpdateBookException = exports.failToGetBookListException = exports.failToInsertBookException = void 0;
function failToInsertBookException() {
    return {
        title: 'Fail to insert book',
        message: 'Fail to insert book',
        errorCode: "BOOK_ERROR_001"
    };
}
exports.failToInsertBookException = failToInsertBookException;
function failToGetBookListException() {
    return {
        title: 'Fail to get book list',
        message: 'Fail to get book list',
        errorCode: "BOOK_ERROR_002"
    };
}
exports.failToGetBookListException = failToGetBookListException;
function failToUpdateBookException() {
    return {
        title: 'Fail to update book list',
        message: 'Fail to update book list',
        errorCode: "BOOK_ERROR_003"
    };
}
exports.failToUpdateBookException = failToUpdateBookException;
function failToGetBookException() {
    return {
        title: 'Fail to get book',
        message: 'Fail to get book',
        errorCode: "BOOK_ERROR_004"
    };
}
exports.failToGetBookException = failToGetBookException;
function failToDeleteBookException() {
    return {
        title: 'Fail to delete book',
        message: 'Fail to delete book',
        errorCode: "BOOK_ERROR_005"
    };
}
exports.failToDeleteBookException = failToDeleteBookException;
