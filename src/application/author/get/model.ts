import QueryGenerator from "@/utils/queryGenerator";
import processGetRequestParams,{GetRequestParamsInputType,OutputParamsInterface} from "@/utils/getRequestParams";

export default class GetBookListModel implements OutputParamsInterface{
    fields: string | undefined
    id:string

    constructor(params:any){
        const queryParams:OutputParamsInterface = processGetRequestParams(params)
        this.fields = queryParams.fields
        this.id = params.id
    }
 
    getBookQuery(){
        const query = new QueryGenerator()
        
        //Insert additional custom filter in object below
        let filter = {
            ref_id: this.id
        }

        if(this.fields){
            query.setFields(this.fields)
        }

        query.setFilter(filter)

        return query
    }


}