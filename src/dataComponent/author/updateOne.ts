import AuthorModel from "@/models/author";
import QueryGenerator from "@/utils/queryGenerator";
import mongoose from 'mongoose'

type UpdateResult = mongoose.UpdateWriteOpResult

export default async function updateOne(query:QueryGenerator):Promise<UpdateResult>{
    try {
        
        const update = query.getUpdate()
        const filter = query.getFilter()
        return await AuthorModel.updateOne(filter,update)
    } catch (error: any) {
        return error
    }
}