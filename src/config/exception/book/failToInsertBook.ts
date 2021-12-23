import Exception from "@/utils/responseHandler/exception";
import  {failToInsertBookException}  from "@/config/constant/exception/book";

export default class FailToInsertBookException extends Exception{
    constructor(){
        super(failToInsertBookException())
    }
}