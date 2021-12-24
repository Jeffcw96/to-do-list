import Exception from "@/utils/responseHandler/exception";
import { failToUpdateRecordException } from "@/config/constant/exception/common";

export default class FailToUpdateBookException extends Exception{
    constructor(){
        super(failToUpdateRecordException())
    }
}