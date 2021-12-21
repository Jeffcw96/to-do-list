import {Request, Response} from 'express';
import bookApplication from '../../application/book';

export default async function createBookController(req:Request, res:Response){
    const response = await bookApplication.createBook(req,res)
    console.log("response",response)
    res.json(response)
}
