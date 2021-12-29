"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailToDeleteAuthorException = exports.FailToGetAuthorException = exports.FailToUpdateAuthorException = exports.FailToGetAuthorListException = exports.FailToInsertAuthorException = void 0;
const failToInsertAuthor_1 = __importDefault(require("./failToInsertAuthor"));
exports.FailToInsertAuthorException = failToInsertAuthor_1.default;
const failToGetAuthorList_1 = __importDefault(require("./failToGetAuthorList"));
exports.FailToGetAuthorListException = failToGetAuthorList_1.default;
const failToUpdateAuthor_1 = __importDefault(require("./failToUpdateAuthor"));
exports.FailToUpdateAuthorException = failToUpdateAuthor_1.default;
const failToGetAuthor_1 = __importDefault(require("./failToGetAuthor"));
exports.FailToGetAuthorException = failToGetAuthor_1.default;
const failToDeleteAuthor_1 = __importDefault(require("./failToDeleteAuthor"));
exports.FailToDeleteAuthorException = failToDeleteAuthor_1.default;
