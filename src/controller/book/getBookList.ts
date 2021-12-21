import {Request, Response} from 'express';
import bookApplication from '../../application/book';

export default async function getBookListController(req:Request, res:Response){
    const response = await bookApplication.getBookList(req)
    res.send(response)
}
