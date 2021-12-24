import BookModel from "@/models/book";
import QueryGenerator from "@/utils/queryGenerator";

export default async function findOne(query:QueryGenerator){
    const filter = query.getFilter()
    const fields = query.getFields()

    try {
        return await BookModel.findOne(filter).select(fields)
    } catch (error) {
        return error
    }
    
}