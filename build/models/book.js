"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongooseUtil_1 = require("@/utils/mongooseUtil");
const encryption_1 = require("@/utils/encryption");
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    ref_id: {
        type: String
    },
    author_ref_id: {
        type: String,
    },
    book_collection: {
        type: String,
    },
    name: {
        type: String,
    },
    weight: {
        type: mongoose_1.default.Types.Decimal128
    },
    hidden_data: {
        type: Buffer,
        set: encryption_1.encryptionBuffer,
        transform: encryption_1.decryptionBuffer
    },
    published_datetime_utc: {
        type: Date,
        default: new Date()
    }
}, {
    timestamps: {
        createdAt: 'created_datetime_utc',
        updatedAt: 'updated_datetime_utc'
    },
    collection: "Book",
    versionKey: false
});
bookSchema.set('toJSON', {
    transform(doc, ret) {
        (0, mongooseUtil_1.decimalToJson)(ret);
        return ret;
    }
});
const BookModel = mongoose_1.default.model("Book", bookSchema);
exports.default = BookModel;
