"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queryGenerator_1 = __importDefault(require("@/utils/queryGenerator"));
const uniqueId_1 = __importDefault(require("@/utils/uniqueId"));
class CreateBookModel {
    constructor(params) {
        this.insertBody = params.body;
        this.author_id = params.author_id;
    }
    getCreateBookQuery() {
        const query = new queryGenerator_1.default();
        this.insertBody["author_ref_id"] = this.author_id;
        this.insertBody["ref_id"] = (0, uniqueId_1.default)();
        query.setInsert(this.insertBody);
        return query;
    }
    getAuthorQuery() {
        const query = new queryGenerator_1.default();
        const filter = {
            ref_id: this.author_id
        };
        query.setFilter(filter);
        return query;
    }
    isAuthorValid(data) {
        if (Object.keys(data).length === 0)
            return false;
        return true;
    }
}
exports.default = CreateBookModel;
