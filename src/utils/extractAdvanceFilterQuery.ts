export default function extractAdvanceFilterQuery(queryParam:any, configFilter:any):any{
    let processedQuery:any = {}

    for (const filter in configFilter){
        let filterValue = queryParam[filter]

        if(filterValue){
            const filterType = configFilter[filter].type

            if(filterType === "regex"){
                const regexObject = new RegExp(filterValue, configFilter[filter]['$option'])
                processedQuery[filter] = regexObject
            }
        }
    }
    return processedQuery
}