import {Request, Response} from 'express';
import responseHandler from '@/utils/responseHandler';
import bookApplication from '../../application/book';

export default async function createBookController(req:Request, res:Response){
    const result = await bookApplication.createBook(req,res)
    responseHandler(res,result)
}
