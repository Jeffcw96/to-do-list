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
        this.fields = queryParams.fields;
        this.id = params.id;
    }
    getBookQuery() {
        const query = new queryGenerator_1.default();
        //Insert additional custom filter in object below
        query.addPipeline({
            $match: {
                ref_id: this.id
            }
        });
        query.addPipeline({
            $lookup: {
                from: "Book",
                let: { "authorRefId": "$ref_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ["$author_ref_id", "$$authorRefId"]
                            }
                        }
                    }
                ],
                as: "books"
            }
        });
        return query;
    }
}
exports.default = GetBookListModel;
