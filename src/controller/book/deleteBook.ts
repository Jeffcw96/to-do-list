import {Request, Response} from 'express';
import responseHandler from '@/utils/responseHandler';
import requestHandler from '@/utils/requestHandler';
import bookApplication from '../../application/book';

export default async function deleteBookController(req:Request, res:Response){
    const inputData = requestHandler(req)
    const result = await bookApplication.deleteBook(inputData)
    responseHandler(res,result)
}
