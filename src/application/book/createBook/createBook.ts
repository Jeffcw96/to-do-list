import appModel from './model'
import dcBook from '@/dataComponent/book'
import { BookInterface } from "@/models/book";
import { RequestInputInterface } from "@/utils/requestHandler";
import {FailToInsertBookException} from '@/config/exception/book'

export default async function createBookApplication(inputData : RequestInputInterface<BookInterface>){
    try {
        let result
        const AppModel = new appModel(inputData)
        try {
            const getCreateBookQuery = AppModel.getCreateBookQuery()
            result = dcBook.create(getCreateBookQuery)
        } catch (error) {
            throw new FailToInsertBookException()
        }

        return result
    } catch (error:Error | unknown) {
        return error
    }
}