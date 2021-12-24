import BookModel from "@/models/book";
import QueryGenerator from "@/utils/queryGenerator";

export default async function find(query:QueryGenerator){
    try {
        const pipeline = query.getPipeline()
        return await BookModel.aggregate(pipeline)
    } catch (error) {
        return error
    }

}