import { PipelineStage } from "mongoose"
export default class QueryGenerator{
    private sortBy:string
    private fields:string 
    private limit:number
    private skip:number
    private filter:object
    private insert:object
    private update:object
    private pipeline:PipelineStage[]

    constructor(){
        this.sortBy = "modified_datetime_utc"
        this.fields = ""
        this.limit = 100
        this.skip = 0
        this.filter = {}
        this.insert = {}
        this.update = {}
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

    setUpdate(update:object){
        this.update = update
        return this
    }

    addPipeline(pipeline:PipelineStage){
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

    getUpdate(){
        return this.update
    }

    getPipeline(){
        return this.pipeline
    }

}