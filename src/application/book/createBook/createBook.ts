import appModel from './model'
import dcBook from '@/dataComponent/book'
import dcAuthor from '@/dataComponent/author'
import { BookInterface } from "@/models/book";
import { RequestInputInterface } from "@/utils/requestHandler";
import {FailToInsertBookException} from '@/config/exception/book'
import { FailToGetAuthorException } from '@/config/exception/author';

export default async function createBookApplication(inputData : RequestInputInterface<BookInterface>){
    try {
        let result
        const AppModel = new appModel(inputData)

        try {
            const getAuthorQuery = AppModel.getAuthorQuery()
            const author = await dcAuthor.findOne(getAuthorQuery)
            const isAuthorValid = AppModel.isAuthorValid(author)

            if(!isAuthorValid)
                throw 'Invalid Author'
        } catch (error) {
            throw new FailToGetAuthorException()
        }

        try {
            const getCreateBookQuery = AppModel.getCreateBookQuery()
            result = await dcBook.create(getCreateBookQuery)
        } catch (error) {
            throw new FailToInsertBookException()
        }

        return result
    } catch (error:Error | unknown) {
        return error
    }
}