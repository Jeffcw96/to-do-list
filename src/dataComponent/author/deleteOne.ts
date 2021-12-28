import AuthorModel from "@/models/author";
import QueryGenerator from "@/utils/queryGenerator";
import mongodb from 'mongodb'

type DeleteResult = mongodb.DeleteResult

export default async function deleteOne(query:QueryGenerator):Promise<DeleteResult>{
    try {
        const filter = query.getFilter()
        return await AuthorModel.deleteOne(filter)
    } catch (error: any) {
        return error
    }
}