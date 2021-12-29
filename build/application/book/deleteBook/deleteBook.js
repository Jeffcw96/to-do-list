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
const book_2 = require("@/config/exception/book");
const common_1 = require("@/config/exception/common");
const messageGenerator_1 = __importDefault(require("@/config/constant/messageGenerator"));
function deleteBook(inputData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const AppModel = new model_1.default(inputData);
            try {
                const updateQuery = AppModel.getUpdateQuery();
                const result = yield book_1.default.deleteOne(updateQuery);
                if (result instanceof Error) {
                    throw result;
                }
                if (result.deletedCount === 0) {
                    throw new common_1.FailToDeleteRecordException();
                }
                return messageGenerator_1.default.delete(AppModel.getRecordId());
            }
            catch (error) {
                throw new book_2.FailToDeleteBookException();
            }
        }
        catch (error) {
            return error;
        }
    });
}
exports.default = deleteBook;
