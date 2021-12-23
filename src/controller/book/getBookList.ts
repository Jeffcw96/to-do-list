import {Request, Response} from 'express';
import bookApplication from '../../application/book';
import responseHandler from '@/utils/responseHandler';
import requestHandler from '@/utils/requestHandler';

export default async function getBookListController(req:Request, res:Response){
    console.log("get book list controller")
    const inputData = requestHandler(req)
    const result = await bookApplication.getBookList(inputData)
    responseHandler(res,result)
}
