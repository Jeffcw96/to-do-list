import Exception from "@/utils/responseHandler/exception";
import { failToGetRecordException } from "@/config/constant/exception/common";

export default class FailToUpdateBookException extends Exception{
    constructor(){
        super(failToGetRecordException())
    }
}