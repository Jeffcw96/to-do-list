import {Request, Response} from 'express'
import appModel from './model'
import dcBook from '../../../dataComponent/book'

export default async function getBookListApplication(req:Request, res:Response){
    try {
        const AppModel = new appModel(req.query)
        // const getBookListQuery = AppModel.getBookListQuery()
        // const result = await dcBook.find(getBookListQuery)
        const getAggregateBookListQuery = AppModel.getAggregateBookListQuery()
        const result = await dcBook.aggregate(getAggregateBookListQuery)

        return result
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}