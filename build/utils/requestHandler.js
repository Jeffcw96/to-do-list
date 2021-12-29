"use strict";
/**
 * @param {Request} request object
 * @description return object with concated req.body, req.param and req.query
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req) => {
    let body = req.body || {};
    let params = req.params || {};
    let query = req.query || {};
    return Object.assign({}, { body: body }, params, query);
};
