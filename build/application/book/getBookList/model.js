"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queryGenerator_1 = __importDefault(require("@/utils/queryGenerator"));
const getRequestParams_1 = __importDefault(require("@/utils/getRequestParams"));
const extractAdvanceFilterQuery_1 = __importDefault(require("@/utils/extractAdvanceFilterQuery"));
const book_1 = __importDefault(require("@/config/constant/advanceFilter/book"));
class GetBookListModel {
    constructor(params) {
        const queryParams = (0, getRequestParams_1.default)(params);
        this.advancedFilter = (0, extractAdvanceFilterQuery_1.default)(params, book_1.default);
        this.sortBy = queryParams.sortBy || "-modified_datetime_utc";
        this.fields = queryParams.fields;
        this.limit = queryParams.limit || 100;
        this.skip = queryParams.skip || 0;
        this.authorId = params.author_id;
    }
    getBookListQuery() {
        const query = new queryGenerator_1.default();
        //Insert additional custom filter in object below
        let filter = Object.assign(Object.assign({}, this.advancedFilter), { author_ref_id: this.authorId });
        if (this.fields) {
            query.setFields(this.fields);
        }
        query.setFilter(filter).setSortBy(this.sortBy).setLimit(this.limit).setSkip(this.skip);
        return query;
    }
    getAggregateBookListQuery() {
        const query = new queryGenerator_1.default();
        query.addPipeline({
            $match: Object.assign({}, this.advancedFilter)
        });
        query.addPipeline({
            $limit: this.limit
        });
        query.addPipeline({
            $project: {
                author: 1,
                book_collection: 1,
                _id: 0
            }
        });
        return query;
    }
}
exports.default = GetBookListModel;
