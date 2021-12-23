/**
 * @param {Request} request object
 * @description return object with concated req.body, req.param and req.query
 */

import { Request } from "express";

export default (req:Request): Request =>{
    let body = req.body || {}
    let params = req.params || {}
    let query = req.query || {}

    return Object.assign({}, body, params,query)
}


