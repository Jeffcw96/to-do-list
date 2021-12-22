import { BookInterface } from "../../../models/book";
import QueryGenerator from "../../../utils/queryGenerator";
export default class CreateBookModel implements BookInterface{
    name:string;
    book_collection:string;
    author:string;

    constructor(params:BookInterface){
        this.name = params.name
        this.book_collection = params.book_collection
        this.author = params.author
    }

    getCreateBookQuery(){
        const query = new QueryGenerator()
        const insertObject = {
            name: this.name,
            author: this.author,
            book_collection: this.book_collection
        }

        query.setInsert(insertObject)

        return query
    }
}