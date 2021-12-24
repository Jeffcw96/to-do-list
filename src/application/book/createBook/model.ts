import { BookInterface } from "@/models/book";
import QueryGenerator from "@/utils/queryGenerator";
import { RequestInputInterface } from "@/utils/requestHandler";
export default class CreateBookModel{
    insertBody : BookInterface

    constructor(params:RequestInputInterface<BookInterface>){
        this.insertBody = params.body
    }

    getCreateBookQuery(){
        const query = new QueryGenerator()

        query.setInsert(this.insertBody)

        return query
    }
}