"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const authorSchema = new mongoose_1.default.Schema({
    ref_id: {
        type: String
    },
    name: {
        type: String,
    },
    age: {
        type: Number
    },
    country: {
        type: String
    }
}, {
    timestamps: {
        createdAt: 'created_datetime_utc',
        updatedAt: 'updated_datetime_utc'
    },
    collection: "Author",
    versionKey: false
});
const AuthorModel = mongoose_1.default.model("Author", authorSchema);
exports.default = AuthorModel;
