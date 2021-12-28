import AuthorModel from "@/models/author";
import QueryGenerator from "@/utils/queryGenerator";

export default async function updateMany(query:QueryGenerator){
    try {
        const update = query.getUpdate()
        const filter = query.getFilter()
        return await AuthorModel.updateMany(filter,update)
    } catch (error) {
        return error
    }
}