import Exception from "@/utils/responseHandler/exception";
import  {failToUpdateAuthorException}  from "@/config/constant/exception/author";

export default class FailToUpdateAuthorException extends Exception{
    constructor(){
        super(failToUpdateAuthorException())
    }
}