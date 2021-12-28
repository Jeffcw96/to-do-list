import {Request, Response} from 'express';
import responseHandler from '@/utils/responseHandler';
import requestHandler from '@/utils/requestHandler';
import author from '@/application/author';

export default async function getAuthorWithBooksController(req:Request, res:Response){
    const inputData = requestHandler(req)
    const result = await author.getAuthorWithBooks(inputData)
    responseHandler(res,result)
}
