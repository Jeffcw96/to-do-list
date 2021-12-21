import {Request, Response} from 'express'
import appModel from './model'
import { getBookList } from '../../../service/book'

export default async function getBookListApplication(req:Request, res:Response){
    try {
        const AppModel = new appModel(req.params)
        const getBookListQuery = AppModel.getBookListQuery()
        const result = await getBookList(getBookListQuery)
        return result
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}