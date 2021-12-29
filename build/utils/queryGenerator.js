"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryGenerator {
    constructor() {
        this.sortBy = "modified_datetime_utc";
        this.fields = "";
        this.limit = 100;
        this.skip = 0;
        this.filter = {};
        this.insert = {};
        this.update = {};
        this.pipeline = [];
    }
    setFilter(filter) {
        this.filter = filter;
        return this;
    }
    setFields(fields) {
        this.fields = fields;
        return this;
    }
    setInsert(insert) {
        this.insert = insert;
        return this;
    }
    setSortBy(sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    setSkip(skip) {
        this.skip = skip;
        return this;
    }
    setLimit(limit) {
        this.limit = limit;
        return this;
    }
    setUpdate(update) {
        this.update = update;
        return this;
    }
    addPipeline(pipeline) {
        this.pipeline.push(pipeline);
        return this;
    }
    getFilter() {
        return this.filter;
    }
    getFields() {
        return this.fields;
    }
    getInsert() {
        return this.insert;
    }
    getSortBy() {
        return this.sortBy;
    }
    getSkip() {
        return this.skip;
    }
    getLimit() {
        return this.limit;
    }
    getUpdate() {
        return this.update;
    }
    getPipeline() {
        return this.pipeline;
    }
}
exports.default = QueryGenerator;
