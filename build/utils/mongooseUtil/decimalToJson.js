"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function decimalToJson(v, i = null, prev = null) {
    if (v !== null && typeof v === "object") {
        if (v.constructor.name === "Decimal128")
            prev[i] = v.toString();
        else
            Object.entries(v).forEach(([key, value]) => decimalToJson(value, key, prev ? prev[i] : v));
    }
}
exports.default = decimalToJson;
