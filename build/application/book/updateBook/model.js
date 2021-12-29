"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queryGenerator_1 = __importDefault(require("@/utils/queryGenerator"));
class UpdateBookModel {
    constructor(params) {
        this.updateBody = params.body;
        this.id = params.id;
        this.authorId = params.author_id;
    }
    getUpdateQuery() {
        const query = new queryGenerator_1.default();
        let filter = {
            ref_id: this.id,
            author_ref_id: this.authorId
        };
        query.setFilter(filter).setUpdate(this.updateBody);
        return query;
    }
    getRecordId() {
        return this.id;
    }
    isUpdateRequired() {
        return Object.keys(this.updateBody).length > 0;
    }
}
exports.default = UpdateBookModel;
