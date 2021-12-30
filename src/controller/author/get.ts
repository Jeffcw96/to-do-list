import {Request, Response} from 'express';
import authorApplication from '@/application/author';
import responseHandler from '@/utils/responseHandler';
import requestHandler from '@/utils/requestHandler';

export default async function getBookController(req:Request, res:Response){
    // console.log("get author controller")
    const inputData = requestHandler(req)
    const result = await authorApplication.getAuthor(inputData)
    responseHandler(res,result)
}
