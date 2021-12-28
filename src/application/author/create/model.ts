import { AuthorInterface } from "@/models/author";
import QueryGenerator from "@/utils/queryGenerator";
import { RequestInputInterface } from "@/utils/requestHandler";
import generateRefId from '@/utils/uniqueId'

export default class CreateAuthorModel{
    insertBody : AuthorInterface

    constructor(params:RequestInputInterface<AuthorInterface>){
        this.insertBody = params.body
    }

    getCreateAuthorQuery(){
        const query = new QueryGenerator()
        this.insertBody['ref_id'] = generateRefId()

        query.setInsert(this.insertBody)

        return query
    }
}