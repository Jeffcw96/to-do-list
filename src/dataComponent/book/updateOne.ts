import BookModel from "@/models/book";
import QueryGenerator from "@/utils/queryGenerator";
import mongoose from 'mongoose'

type UpdateResult = mongoose.UpdateWriteOpResult

export default async function updateOne(query:QueryGenerator):Promise<UpdateResult>{
    try {
        
        const update = query.getUpdate()
        const filter = query.getFilter()
        return await BookModel.updateOne(filter,update)
    } catch (error: any) {
        return error
    }
}