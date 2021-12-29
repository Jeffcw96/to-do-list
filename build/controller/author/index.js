"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = __importDefault(require("./create"));
const getWithBooks_1 = __importDefault(require("./getWithBooks"));
const get_1 = __importDefault(require("./get"));
exports.default = {
    createAuthor: create_1.default,
    getAuthor: get_1.default,
    getAuthorWithBooks: getWithBooks_1.default
};
