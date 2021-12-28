import Exception from "@/utils/responseHandler/exception";
import { failToDeleteAuthorException } from "@/config/constant/exception/author";

export default class FailToDeleteAuthorException extends Exception{
    constructor(){
        super(failToDeleteAuthorException())
    }
}