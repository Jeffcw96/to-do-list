"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./book"));
const author_1 = __importDefault(require("./author"));
function routes(app) {
    app.use('/api/', book_1.default);
    app.use('/api/author', author_1.default);
}
exports.default = routes;
