"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    author: {
        fieldName: 'author',
        type: 'regex',
        $option: 'i'
    },
    book_collection: {
        fieldName: 'book_collection',
        type: 'regex',
        $option: 'i'
    },
    name: {
        fieldName: 'name',
        type: 'regex',
        $option: 'i'
    },
    published_datetime_utc: {
        type: 'date_range'
    }
};
