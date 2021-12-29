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
const book_1 = __importDefault(require("../../application/book"));
const responseHandler_1 = __importDefault(require("@/utils/responseHandler"));
const requestHandler_1 = __importDefault(require("@/utils/requestHandler"));
function getBookController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("get book controller");
        const inputData = (0, requestHandler_1.default)(req);
        const result = yield book_1.default.getBook(inputData);
        (0, responseHandler_1.default)(res, result);
    });
}
exports.default = getBookController;
