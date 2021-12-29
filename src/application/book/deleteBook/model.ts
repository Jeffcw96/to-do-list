import QueryGenerator from "@/utils/queryGenerator";
import { BookInterface } from "@/models/book";
import { RequestInputInterface } from "@/utils/requestHandler";

export default class UpdateBookModel{
    id: string
    authorId: string

    constructor(params:RequestInputInterface<BookInterface>){
        this.id = params.id
        this.authorId = params.author_id
    }

    getUpdateQuery(){
        const query = new QueryGenerator()
        
        let filter = {
            ref_id: this.id,
            author_ref_id: this.authorId
        }

        query.setFilter(filter)
        return query
    }

    getRecordId(){
        return this.id
    }

}