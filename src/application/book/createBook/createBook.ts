import {Request, Response} from 'express'
import appModel from './model'
import dcBook from '../../../dataComponent/book'

export default async function createBookApplication(req:Request, res:Response){
    try {
        console.log("create book application")
        const AppModel = new appModel(req.body)
        const getCreateBookQuery = AppModel.getCreateBookQuery()
        const result = dcBook.create(getCreateBookQuery)
        return result
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}