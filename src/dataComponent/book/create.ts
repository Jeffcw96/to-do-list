import BookModel from "../../models/book";
import QueryGenerator from "../../utils/queryGenerator";

export default async function create(query:QueryGenerator){
    const insertObject = query.getInsert()
    return await BookModel.create(insertObject)
}