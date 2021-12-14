import {Request, Response} from 'express';
import bookApplication from '../../application/book';

export default function createBookController(req:Request, res:Response){
    console.log("create book controller")
    const response = bookApplication.createBook(req,res)
    return response
}
