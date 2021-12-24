import BookModel from "@/models/book";
import QueryGenerator from "@/utils/queryGenerator";
import mongodb from 'mongodb'

type DeleteResult = mongodb.DeleteResult

export default async function deleteOne(query:QueryGenerator):Promise<DeleteResult>{
    try {
        const filter = query.getFilter()
        return await BookModel.deleteOne(filter)
    } catch (error: any) {
        return error
    }
}