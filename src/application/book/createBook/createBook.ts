import {Request, Response} from 'express'
import appModel from './model'
import dcBook from '../../../dataComponent/book'

import {FailToInsertBookException} from '@/config/exception/book'


export default async function createBookApplication(req:Request, res:Response){
    try {
        console.log("create book application")
        let result
        const AppModel = new appModel(req.body)
        try {
            const getCreateBookQuery = AppModel.getCreateBookQuery()
            result = dcBook.create(getCreateBookQuery)
        } catch (error) {
            console.error(error)
            throw new FailToInsertBookException()
        }

        return result
    } catch (error:any) {
        return error
    }
}