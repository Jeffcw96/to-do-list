import {Request, Response} from 'express'
import Model from './model'

export default function createBookApplication(req:Request, res:Response){
    try {
        const appModel = new Model()
        return 'good'
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}