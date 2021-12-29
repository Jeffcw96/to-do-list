import QueryGenerator from "@/utils/queryGenerator";
import processGetRequestParams,{GetRequestParamsInputType,OutputParamsInterface} from "@/utils/getRequestParams";
import extractAdvanceFilterQuery from "@/utils/extractAdvanceFilterQuery";
import bookAdvanceFilter from "@/config/constant/advanceFilter/book";

export default class GetBookListModel implements OutputParamsInterface{
    advancedFilter: object
    sortBy: string 
    fields: string | undefined
    limit: number 
    skip: number
    authorId: string 

    constructor(params: GetRequestParamsInputType){
        const queryParams:OutputParamsInterface = processGetRequestParams(params)
        this.advancedFilter = extractAdvanceFilterQuery(params,bookAdvanceFilter)
        this.sortBy = queryParams.sortBy || "-modified_datetime_utc"
        this.fields = queryParams.fields
        this.limit = queryParams.limit || 100
        this.skip = queryParams.skip || 0
        this.authorId = params.author_id
    }
 
    getBookListQuery(){
        const query = new QueryGenerator()
        
        //Insert additional custom filter in object below
        let filter = {
            ...this.advancedFilter,
            author_ref_id: this.authorId
        }

        if(this.fields){
            query.setFields(this.fields)
        }

        query.setFilter(filter).setSortBy(this.sortBy).setLimit(this.limit).setSkip(this.skip)

        return query
    }

    getAggregateBookListQuery(){
        const query = new QueryGenerator()

        query.addPipeline({
            $match:{
                ...this.advancedFilter
            }
        })

        query.addPipeline({
            $limit: this.limit
        })

        query.addPipeline({
            $project:{
                author: 1,
                book_collection:1,
                _id:0
            }
        })

        return query
    }
}