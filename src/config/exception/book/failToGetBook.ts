import { failToGetBookException } from "@/config/constant/exception/book";
import Exception from "@/utils/responseHandler/exception";

export default class FailToGetBookException extends Exception{
    constructor(){
        super(failToGetBookException())
    }
}