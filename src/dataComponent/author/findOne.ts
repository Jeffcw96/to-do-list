import AuthorModel from "@/models/author";
import QueryGenerator from "@/utils/queryGenerator";

export default async function findOne(query:QueryGenerator):Promise<any>{
    const filter = query.getFilter()
    const fields = query.getFields()

    try {
        return await AuthorModel.findOne(filter).select(fields)
    } catch (error) {
        return error
    }
    
}