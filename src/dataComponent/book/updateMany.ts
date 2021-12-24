import BookModel from "@/models/book";
import QueryGenerator from "@/utils/queryGenerator";

export default async function updateMany(query:QueryGenerator){
    try {
        const update = query.getUpdate()
        const filter = query.getFilter()
        return await BookModel.updateMany(filter,update)
    } catch (error) {
        return error
    }
}