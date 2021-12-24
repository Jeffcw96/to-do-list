import appModel from './model'
import dcBook from '@/dataComponent/book'
import { GetRequestParamsInputType } from '@/utils/getRequestParams'

export default async function getBookListApplication(inputData: any){
    try {
        const AppModel = new appModel(inputData)
        const getBookListQuery = AppModel.getBookListQuery()
        const result = await dcBook.find(getBookListQuery)
        console.log("get book list result",result)
        // const getAggregateBookListQuery = AppModel.getAggregateBookListQuery()
        // const result = await dcBook.aggregate(getAggregateBookListQuery)

        return result
    } catch (error:any) {
        return error
    }
}