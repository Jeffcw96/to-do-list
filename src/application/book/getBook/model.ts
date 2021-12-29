import QueryGenerator from "@/utils/queryGenerator";
import processGetRequestParams,{GetRequestParamsInputType,OutputParamsInterface} from "@/utils/getRequestParams";
import extractAdvanceFilterQuery from "@/utils/extractAdvanceFilterQuery";
import bookAdvanceFilter from "@/config/constant/advanceFilter/book";

export default class GetBookListModel implements OutputParamsInterface{
    advancedFilter: object
    fields: string | undefined
    id:string
    authorId: string

    constructor(params:any){
        const queryParams:OutputParamsInterface = processGetRequestParams(params)
        this.advancedFilter = extractAdvanceFilterQuery(params,bookAdvanceFilter)
        this.fields = queryParams.fields
        this.id = params.id
        this.authorId = params.author_id
    }
 
    getBookQuery(){
        const query = new QueryGenerator()
        
        //Insert additional custom filter in object below
        let filter = {
            ref_id: this.id,
            author_ref_id: this.authorId
        }

        if(this.fields){
            query.setFields(this.fields)
        }

        query.setFilter(filter)

        return query
    }


}