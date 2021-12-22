import QueryGenerator from "../../../utils/queryGenerator";
import processGetRequestParams,{GetRequestParamsInputType,OutputParamsInterface} from "@/utils/getRequestParams";
import extractAdvanceFilterQuery from "@/utils/extractAdvanceFilterQuery";
import bookAdvanceFilter from "@/utils/advanceFilter/book";
export default class GetBookListModel implements OutputParamsInterface{
    advancedFilter: object
    sortBy: string 
    fields: string | undefined
    limit: number 
    skip: number 

    constructor(params: GetRequestParamsInputType){
        const queryParams:OutputParamsInterface = processGetRequestParams(params)
        this.advancedFilter = extractAdvanceFilterQuery(params,bookAdvanceFilter)
        this.sortBy = queryParams.sortBy || "-modified_datetime_utc"
        this.fields = queryParams.fields
        this.limit = queryParams.limit || 100
        this.skip = queryParams.skip || 0
    }
 
    getBookListQuery(){
        const query = new QueryGenerator()
        
        //Insert additional custom filter in object below
        let filter = {
            ...this.advancedFilter
        }

        if(this.fields){
            query.setFields(this.fields)
        }

        query.setFilter(filter).setSortBy(this.sortBy).setLimit(this.limit).setSkip(this.skip)

        return query
    }
}