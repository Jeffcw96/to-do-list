"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("./model"));
const book_1 = __importDefault(require("@/dataComponent/book"));
const author_1 = __importDefault(require("@/dataComponent/author"));
const book_2 = require("@/config/exception/book");
const author_2 = require("@/config/exception/author");
function createBookApplication(inputData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let result;
            const AppModel = new model_1.default(inputData);
            try {
                const getAuthorQuery = AppModel.getAuthorQuery();
                const author = yield author_1.default.findOne(getAuthorQuery);
                const isAuthorValid = AppModel.isAuthorValid(author);
                if (!isAuthorValid)
                    throw 'Invalid Author';
            }
            catch (error) {
                throw new author_2.FailToGetAuthorException();
            }
            try {
                const getCreateBookQuery = AppModel.getCreateBookQuery();
                result = yield book_1.default.create(getCreateBookQuery);
            }
            catch (error) {
                throw new book_2.FailToInsertBookException();
            }
            return result;
        }
        catch (error) {
            return error;
        }
    });
}
exports.default = createBookApplication;
