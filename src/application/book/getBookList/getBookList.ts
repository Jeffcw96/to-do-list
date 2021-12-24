import appModel from './model'
import dcBook from '@/dataComponent/book'
import { GetRequestParamsInputType } from '@/utils/getRequestParams'
import { FailToGetBookListException } from '@/config/exception/book'

export default async function getBookApplication(inputData: any){
    try {
        const AppModel = new appModel(inputData)
        let result
        try {
            const getBookListQuery = AppModel.getBookListQuery()
            result = await dcBook.find(getBookListQuery)
        } catch (error) {
            throw new FailToGetBookListException()
        }

        return result
    } catch (error:any) {
        return error
    }
}