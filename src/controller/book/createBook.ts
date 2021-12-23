import {Request, Response} from 'express';
import responseHandler from '@/utils/responseHandler';
import requestHandler from '@/utils/requestHandler';
import bookApplication from '../../application/book';

export default async function createBookController(req:Request, res:Response){
    const inputData = requestHandler(req)
    const result = await bookApplication.createBook(inputData)
    responseHandler(res,result)
}
