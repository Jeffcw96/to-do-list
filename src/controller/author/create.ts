import {Request, Response} from 'express';
import responseHandler from '@/utils/responseHandler';
import requestHandler from '@/utils/requestHandler';
import author from '@/application/author';

export default async function createAuthorController(req:Request, res:Response){
    const inputData = requestHandler(req)
    const result = await author.createAuthor(inputData)
    responseHandler(res,result)
}
