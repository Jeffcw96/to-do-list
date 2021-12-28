import appModel from './model'
import dcAuthor from '@/dataComponent/author'
import { AuthorInterface } from '@/models/author';
import { RequestInputInterface } from "@/utils/requestHandler";
import { FailToInsertAuthorException } from '@/config/exception/author';

export default async function createAuthorApplication(inputData : RequestInputInterface<AuthorInterface>){
    try {
        let result
        const AppModel = new appModel(inputData)
        try {
            const getCreateAuthorQuery = AppModel.getCreateAuthorQuery()
            result = dcAuthor.create(getCreateAuthorQuery)
        } catch (error) {
            throw new FailToInsertAuthorException()
        }

        return result
    } catch (error:Error | unknown) {
        return error
    }
}