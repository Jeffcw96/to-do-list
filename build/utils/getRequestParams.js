"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFilterQuery = void 0;
var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "1";
    SortDirection["DES"] = "-1";
})(SortDirection || (SortDirection = {}));
function processGetRequestParams(routeParam) {
    let processedParam = {};
    /*
        Process SortBy and it's direction
    */
    if (routeParam.sortBy) {
        if (routeParam.sortDirection === SortDirection.ASC) {
            processedParam.sortBy = routeParam.sortBy;
        }
        else {
            processedParam.sortBy = `-${routeParam.sortBy}`;
        }
    }
    else {
        processedParam.sortBy = "-modified_datetime_utc";
    }
    /*
        Process limit and pagination
    */
    if (routeParam.limit) {
        processedParam.limit = parseInt(routeParam.limit);
        if (routeParam.page) {
            const skip = (parseInt(routeParam.page) - 1) * parseInt(routeParam.limit);
            processedParam.skip = skip;
        }
    }
    /*
        Process select fields
    */
    if (routeParam.fields) {
        processedParam.fields = routeParam.fields.split(",").join(" ");
    }
    return processedParam;
}
exports.default = processGetRequestParams;
function generateFilterQuery(query) {
    const queryObj = Object.assign({}, query);
    const excludedFields = ['page', 'sortBy', 'sortDirection', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);
}
exports.generateFilterQuery = generateFilterQuery;
