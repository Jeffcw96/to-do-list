import { ValidationError } from "yup";

type SchemaErrorType = {
    field: string,
    error: string
}

export default function schemaErrorHandler(error:ValidationError){
    const errorArray = error.inner.reduce((acc:SchemaErrorType[],val:ValidationError)=>{
        if(val.path && val.message){
            return [...acc, {field: val.path, error: val.message}]
        }
        return acc
    }, [])

    return errorArray
}