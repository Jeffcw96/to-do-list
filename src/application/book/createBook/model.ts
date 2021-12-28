import { BookInterface } from "@/models/book";
import { AuthorDocument } from "@/models/author";
import QueryGenerator from "@/utils/queryGenerator";
import { RequestInputInterface } from "@/utils/requestHandler";
import generateRefId from '@/utils/uniqueId'
export default class CreateBookModel{
    insertBody : BookInterface
    author_id:string

    constructor(params:RequestInputInterface<BookInterface>){
        this.insertBody = params.body
        this.author_id = params.author_id
    }

    getCreateBookQuery(){
        const query = new QueryGenerator()
        this.insertBody["author_ref_id"] = this.author_id
        this.insertBody["ref_id"] = generateRefId()

        query.setInsert(this.insertBody)

        return query
    }

    getAuthorQuery(){
        const query = new QueryGenerator()
        const filter = {
            ref_id: this.author_id
        }

        query.setFilter(filter)

        return query
    }

    isAuthorValid(data:AuthorDocument){
        if(Object.keys(data).length === 0)
            return false

        return true
    }

    
    
}