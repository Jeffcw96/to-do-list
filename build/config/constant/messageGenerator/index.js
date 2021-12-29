"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_1 = __importDefault(require("./update"));
const delete_1 = __importDefault(require("./delete"));
exports.default = {
    update: update_1.default,
    delete: delete_1.default
};
