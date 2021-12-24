import BookModel from "@/models/book";
import QueryGenerator from "@/utils/queryGenerator";

export default async function create(query:QueryGenerator){
    try {
        const insertObject = query.getInsert()
        return await BookModel.create(insertObject)
    } catch (error) {
        return error
    }
}