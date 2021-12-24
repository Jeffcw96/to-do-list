import appModel from './model'
import dcBook from '@/dataComponent/book'
import { BookInterface } from "@/models/book";
import { RequestInputInterface } from "@/utils/requestHandler";
import {FailToUpdateBookException} from '@/config/exception/book'
import { FailToUpdateRecordException } from '@/config/exception/common';
import messageGenerator from '@/config/constant/messageGenerator';

export default async function updateBook(inputData:RequestInputInterface<BookInterface>){
    try {
        const AppModel = new appModel(inputData)

        if(AppModel.isUpdateRequired()){
            try {
                const updateQuery = AppModel.getUpdateQuery()
                const result = await dcBook.updateOne(updateQuery)

                if(result instanceof Error){
                    throw result
                }
                
                if(result.modifiedCount === 0){
                    throw new FailToUpdateRecordException()
                }

                return messageGenerator.update(AppModel.getRecordId())

            } catch (error) {
                throw new FailToUpdateBookException()
            }

        }else{
            throw new FailToUpdateBookException()
        }

    } catch (error: Error | unknown) {
        return error
    }
}