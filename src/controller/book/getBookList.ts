import {Request, Response} from 'express';
import bookApplication from '../../application/book';

export default async function getBookListController(req:Request, res:Response){
    console.log("get book list controller")
    const response = await bookApplication.getBookList(req, res)
    res.send(response)
}
