enum SortDirection {
    ASC = "1",
    DES = "-1"
}

export interface GetRequestParamsInputType {
    sortDirection?: SortDirection ,
    sortBy?: string,
    limit?: string,
    page?: string,
    fields?:string,
    [k : string] : any
}

export interface OutputParamsInterface{
    sortBy?:string,
    fields?: string,
    limit?:number,
    skip?:number
}

export default function processGetRequestParams(routeParam:GetRequestParamsInputType):OutputParamsInterface{
    let processedParam:OutputParamsInterface = {}
    /* 
        Process SortBy and it's direction
    */
    if(routeParam.sortBy){
        if(routeParam.sortDirection === SortDirection.ASC){
            processedParam.sortBy = routeParam.sortBy
        }else{
            processedParam.sortBy = `-${routeParam.sortBy}`
        }
    }else{
        processedParam.sortBy = "-modified_datetime_utc"
    }

    /* 
        Process limit and pagination
    */
    if(routeParam.limit){
        processedParam.limit = parseInt(routeParam.limit)

        if(routeParam.page){
            const skip = (parseInt(routeParam.page) - 1) * parseInt(routeParam.limit);
            processedParam.skip = skip
        }
    }

    /* 
        Process select fields
    */
    if(routeParam.fields){
        processedParam.fields = routeParam.fields.split(",").join(" ")
    }

    return processedParam
}

export function generateFilterQuery(query:object){
    const queryObj = {...query}
    const excludedFields = ['page', 'sortBy', 'sortDirection', 'limit', 'fields']
    excludedFields.forEach(el => delete (queryObj as any)[el])

    

}