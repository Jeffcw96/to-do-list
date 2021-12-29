"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queryGenerator_1 = __importDefault(require("@/utils/queryGenerator"));
const getRequestParams_1 = __importDefault(require("@/utils/getRequestParams"));
class GetBookListModel {
    constructor(params) {
        const queryParams = (0, getRequestParams_1.default)(params);
        this.fields = queryParams.fields;
        this.id = params.id;
    }
    getBookQuery() {
        const query = new queryGenerator_1.default();
        //Insert additional custom filter in object below
        let filter = {
            ref_id: this.id
        };
        if (this.fields) {
            query.setFields(this.fields);
        }
        query.setFilter(filter);
        return query;
    }
}
exports.default = GetBookListModel;
