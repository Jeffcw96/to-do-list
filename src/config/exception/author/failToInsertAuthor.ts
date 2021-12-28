import Exception from "@/utils/responseHandler/exception";
import  {failToInsertAuthorException}  from "@/config/constant/exception/author";

export default class FailToInsertAuthorException extends Exception{
    constructor(){
        super(failToInsertAuthorException())
    }
}