"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordNotFoundException = exports.FailToDeleteRecordException = exports.FailToUpdateRecordException = exports.FailToGetRecord = void 0;
const failToGetRecord_1 = __importDefault(require("./failToGetRecord"));
exports.FailToGetRecord = failToGetRecord_1.default;
const failToUpdateRecord_1 = __importDefault(require("./failToUpdateRecord"));
exports.FailToUpdateRecordException = failToUpdateRecord_1.default;
const failToDeleteRecord_1 = __importDefault(require("./failToDeleteRecord"));
exports.FailToDeleteRecordException = failToDeleteRecord_1.default;
const recordNotFound_1 = __importDefault(require("./recordNotFound"));
exports.RecordNotFoundException = recordNotFound_1.default;
