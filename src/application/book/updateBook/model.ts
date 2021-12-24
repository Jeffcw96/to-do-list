import QueryGenerator from "@/utils/queryGenerator";
import { BookInterface } from "@/models/book";
import { RequestInputInterface } from "@/utils/requestHandler";

export default class UpdateBookModel{
    updateBody: BookInterface
    id: string

    constructor(params:RequestInputInterface<BookInterface>){
        this.updateBody = params.body
        this.id = params.id
    }

    getUpdateQuery(){
        const query = new QueryGenerator()
        
        let filter = {
            _id: this.id
        }

        query.setFilter(filter).setUpdate(this.updateBody)
        return query
    }

    getRecordId(){
        return this.id
    }

    isUpdateRequired(){
        return Object.keys(this.updateBody).length > 0
    }


}