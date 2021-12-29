"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function generateRefId() {
    return (0, uuid_1.v1)();
}
exports.default = generateRefId;
