import { failToGetAuthorException } from "@/config/constant/exception/author";
import Exception from "@/utils/responseHandler/exception";

export default class FailToGetAuthorException extends Exception{
    constructor(){
        super(failToGetAuthorException())
    }
}