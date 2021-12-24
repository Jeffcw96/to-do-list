import appModel from './model'
import dcBook from '@/dataComponent/book'
import { FailToGetBookException } from '@/config/exception/book'

export default async function getBookListApplication(inputData: any){
    try {
        const AppModel = new appModel(inputData)
        let result
        try {
            const getBookListQuery = AppModel.getBookQuery()
            result = await dcBook.findOne(getBookListQuery)
        } catch (error) {
            throw new FailToGetBookException()
        }

        return result
    } catch (error:any) {
        return error
    }
}