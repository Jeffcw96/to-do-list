import appModel from './model'
import dcBook from '@/dataComponent/book'
import { BookInterface } from "@/models/book";
import { RequestInputInterface } from "@/utils/requestHandler";
import {FailToDeleteBookException} from '@/config/exception/book'
import { FailToDeleteRecordException } from '@/config/exception/common';
import messageGenerator from '@/config/constant/messageGenerator';

export default async function deleteBook(inputData:RequestInputInterface<BookInterface>){
    try {
        const AppModel = new appModel(inputData)
        try {
            const updateQuery = AppModel.getUpdateQuery()
            const result = await dcBook.deleteOne(updateQuery)

            if(result instanceof Error){
                throw result
            }
            
            if(result.deletedCount === 0){
                throw new FailToDeleteRecordException()
            }

            return messageGenerator.delete(AppModel.getRecordId())

        } catch (error) {
            throw new FailToDeleteBookException()
        }

    } catch (error: Error | unknown) {
        return error
    }
}