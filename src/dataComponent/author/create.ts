import AuthorModel from "@/models/author";
import QueryGenerator from "@/utils/queryGenerator";

export default async function create(query:QueryGenerator){
    try {
        const insertObject = query.getInsert()
        return await AuthorModel.create(insertObject)
    } catch (error) {
        return error
    }
}