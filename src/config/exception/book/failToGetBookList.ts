import Exception from "@/utils/responseHandler/exception";
import {failToGetBookListException} from '@/config/constant/exception/book'

export default class FailToGetBookListException extends Exception{
    constructor(){
        super(failToGetBookListException())
    }
}