import AuthorModel from "@/models/author";
import QueryGenerator from "@/utils/queryGenerator";

export default async function aggregate(query:QueryGenerator){
    try {
        const pipeline = query.getPipeline()
        return await AuthorModel.aggregate(pipeline)
    } catch (error) {
        return error
    }

}