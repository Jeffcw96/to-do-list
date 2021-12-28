import appModel from './model'
import dcAuthor from '@/dataComponent/author'
import { FailToGetAuthorException } from '@/config/exception/author'

export default async function getAuthorWithBooksApplication(inputData: any){
    try {
        const AppModel = new appModel(inputData)
        let result
        try {
            const getAuthorQuery = AppModel.getBookQuery()
            console.log("getAuthorQuery",getAuthorQuery.getPipeline())
            result = await dcAuthor.aggregate(getAuthorQuery)
        } catch (error) {
            throw new FailToGetAuthorException()
        }

        return result
    } catch (error:any) {
        return error
    }
}