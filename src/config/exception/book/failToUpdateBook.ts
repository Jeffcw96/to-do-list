import Exception from "@/utils/responseHandler/exception";
import  {failToUpdateBookException}  from "@/config/constant/exception/book";

export default class FailToUpdateBookException extends Exception{
    constructor(){
        super(failToUpdateBookException())
    }
}