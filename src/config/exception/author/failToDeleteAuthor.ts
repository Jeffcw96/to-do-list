import Exception from "@/utils/responseHandler/exception";
import  {failToDeleteBookException}  from "@/config/constant/exception/book";

export default class FailToDeleteBookException extends Exception{
    constructor(){
        super(failToDeleteBookException())
    }
}