export default class QueryGenerator{
    private sortBy:string
    private fields:string 
    private limit:number
    private skip:number
    private filter:object
    private insert:object
    private updateOne:object
    private updateMany:object
    private pipeline:Array<object>

    constructor(){
        this.sortBy = "modified_datetime_utc"
        this.fields = ""
        this.limit = 100
        this.skip = 0
        this.filter = {}
        this.insert = {}
        this.updateOne = {}
        this.updateMany = {}
        this.pipeline = []
    }

    setFilter(filter:object){
        this.filter = filter
        return this
    }

    setFields(fields:string){
        this.fields = fields
        return this
    }

    setInsert(insert:object){
        this.insert = insert
        return this
    }

    setSortBy(sortBy:string){
        this.sortBy = sortBy
        return this
    }

    setSkip(skip:number){
        this.skip = skip
        return this
    }

    setLimit(limit:number){
        this.limit = limit
        return this
    }

    setUpdateOne(update:object){
        this.updateOne = update
        return this
    }

    setUpdateMany(update:object){
        this.updateMany = update
        return this
    }

    addPipeline(pipeline:object){
        this.pipeline.push(pipeline)
        return this
    }

    getFilter(){
        return this.filter
    }

    getFields(){
        return this.fields
    }

    getInsert(){
        return this.insert
    }

    getSortBy(){
        return this.sortBy
    }

    getSkip(){
        return this.skip
    }

    getLimit(){
        return this.limit
    }

    getUpdateOne(){
        return this.updateOne
    }

    getUpdateMany(){
        return this.updateMany
    }

    getPipeline(){
        return this.pipeline
    }

}