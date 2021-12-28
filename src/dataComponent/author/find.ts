import AuthorModel from "@/models/author";
import QueryGenerator from "@/utils/queryGenerator";

export default async function find(query:QueryGenerator){
    const filter = query.getFilter()
    const skip = query.getSkip()
    const limit = query.getLimit()
    const sortBy = query.getSortBy()
    const fields = query.getFields()

    try {
        return await AuthorModel.find(filter).sort(sortBy).limit(limit).skip(skip).select(fields)
    } catch (error) {
        return error
    }
    
}