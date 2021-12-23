import Exception from "@/utils/responseHandler/exception";
import book from '@/config/constant/exception/book'

export default class FailToInsertBookException extends Exception{
    constructor(){
        super(book.failToInsertBookException())
    }
}