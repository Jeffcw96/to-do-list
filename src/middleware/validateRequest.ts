import { Request, Response, NextFunction } from 'express'
import {object, AnySchema} from 'yup'
import schemaErrorHandler from '@/utils/schemaErrorHandler'

const validate = (schema:AnySchema) => async (req:Request, res:Response, next:NextFunction) => {
    try {
        await schema.validate({
            body:req.body,
            query: req.query,
            params: req.params
        },{
            abortEarly:false
        })
        
        next()
    } catch (error:any) {
        if(error.inner)
            return res.status(400).json(schemaErrorHandler(error));
        else
            return res.status(400).json(error);
        
    }

}

export default validate