import {Request, Response} from 'express';
import bookApplication from '../../application/book';
import responseHandler from '@/utils/responseHandler';
import requestHandler from '@/utils/requestHandler';

export default async function getBookController(req:Request, res:Response){
    console.log("get book controller")
    const inputData = requestHandler(req)
    const result = await bookApplication.getBook(inputData)
    responseHandler(res,result)
}
