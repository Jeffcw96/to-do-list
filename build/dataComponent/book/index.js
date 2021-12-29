"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const find_1 = __importDefault(require("./find"));
const create_1 = __importDefault(require("./create"));
const aggregate_1 = __importDefault(require("./aggregate"));
const updateMany_1 = __importDefault(require("./updateMany"));
const updateOne_1 = __importDefault(require("./updateOne"));
const findOne_1 = __importDefault(require("./findOne"));
const deleteOne_1 = __importDefault(require("./deleteOne"));
exports.default = {
    find: find_1.default,
    findOne: findOne_1.default,
    create: create_1.default,
    aggregate: aggregate_1.default,
    updateOne: updateOne_1.default,
    updateMany: updateMany_1.default,
    deleteOne: deleteOne_1.default
};
