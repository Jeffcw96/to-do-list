import QueryGenerator from "@/utils/queryGenerator";
import processGetRequestParams,{GetRequestParamsInputType,OutputParamsInterface} from "@/utils/getRequestParams";
import extractAdvanceFilterQuery from "@/utils/extractAdvanceFilterQuery";
import bookAdvanceFilter from "@/config/constant/advanceFilter/book";

export default class GetBookListModel implements OutputParamsInterface{
    advancedFilter: object
    fields: string | undefined
    id:string

    constructor(params:any){
        const queryParams:OutputParamsInterface = processGetRequestParams(params)
        this.advancedFilter = extractAdvanceFilterQuery(params,bookAdvanceFilter)
        this.fields = queryParams.fields
        this.id = params.id
    }
 
    getBookQuery(){
        const query = new QueryGenerator()
        
        //Insert additional custom filter in object below
        let filter = {
            _id: this.id
        }

        if(this.fields){
            query.setFields(this.fields)
        }

        query.setFilter(filter)

        return query
    }


}