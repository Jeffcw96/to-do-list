"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queryGenerator_1 = __importDefault(require("@/utils/queryGenerator"));
const uniqueId_1 = __importDefault(require("@/utils/uniqueId"));
class CreateAuthorModel {
    constructor(params) {
        this.insertBody = params.body;
    }
    getCreateAuthorQuery() {
        const query = new queryGenerator_1.default();
        this.insertBody['ref_id'] = (0, uniqueId_1.default)();
        query.setInsert(this.insertBody);
        return query;
    }
}
exports.default = CreateAuthorModel;
