
export function failToUpdateRecordException(){
    return{
        title:'Fail to update record',
        message:'Fail to update record',
        errorCode: "COMMON_ERROR_001"
    }
}
export function failToGetRecordException(){
    return{
        title:'Fail to get record',
        message:'Fail to get record',
        errorCode: "COMMON_ERROR_002",
    }
}

export function failToDeleteRecordException(){
    return{
        title:'Fail to delete record',
        message:'Fail to delete record',
        errorCode: "COMMON_ERROR_003"
    }
}

export function recordNotFoundException(){
    return{
        title:'Record not found',
        message:'Record not found',
        errorCode: "COMMON_ERROR_004",
        statusCode: 404
    }
}

