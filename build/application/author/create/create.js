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
const author_1 = __importDefault(require("@/dataComponent/author"));
const author_2 = require("@/config/exception/author");
function createAuthorApplication(inputData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let result;
            const AppModel = new model_1.default(inputData);
            try {
                const getCreateAuthorQuery = AppModel.getCreateAuthorQuery();
                result = author_1.default.create(getCreateAuthorQuery);
            }
            catch (error) {
                throw new author_2.FailToInsertAuthorException();
            }
            return result;
        }
        catch (error) {
            return error;
        }
    });
}
exports.default = createAuthorApplication;
