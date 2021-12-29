import Exception from "@/utils/responseHandler/exception";
import { recordNotFoundException } from "@/config/constant/exception/common";

export default class RecordNotFoundException extends Exception{
    constructor(){
        super(recordNotFoundException())
    }
}