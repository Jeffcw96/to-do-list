import Exception from "@/utils/responseHandler/exception";
import {failToGetAuthorListException} from '@/config/constant/exception/author'

export default class FailToGetAuthorListException extends Exception{
    constructor(){
        super(failToGetAuthorListException())
    }
}