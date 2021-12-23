import { BookInterface } from "../../../models/book";
import QueryGenerator from "../../../utils/queryGenerator";
export default class CreateBookModel implements BookInterface{
    name:string;
    book_collection:string;
    author:string;
    weight:number;
    hidden_data:string

    constructor(params:BookInterface){
        this.name = params.name
        this.book_collection = params.book_collection
        this.author = params.author
        this.weight = params.weight
        this.hidden_data = params.hidden_data
    }

    getCreateBookQuery(){
        console.log("hidden data", this.hidden_data)
        const query = new QueryGenerator()
        const insertObject = {
            name: this.name,
            author: this.author,
            book_collection: this.book_collection,
            weight:this.weight,
            hidden_data: this.hidden_data
        }

        query.setInsert(insertObject)

        return query
    }
}