import Exception from "@/utils/responseHandler/exception";
import { failToDeleteRecordException } from "@/config/constant/exception/common";

export default class FailToDeleteBookException extends Exception{
    constructor(){
        super(failToDeleteRecordException())
    }
}