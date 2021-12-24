import QueryGenerator from "@/utils/queryGenerator";
import { BookInterface } from "@/models/book";
import { RequestInputInterface } from "@/utils/requestHandler";

export default class UpdateBookModel{
    id: string

    constructor(params:RequestInputInterface<BookInterface>){
        this.id = params.id
    }

    getUpdateQuery(){
        const query = new QueryGenerator()
        
        let filter = {
            _id: this.id
        }

        query.setFilter(filter)
        return query
    }

    getRecordId(){
        return this.id
    }

}