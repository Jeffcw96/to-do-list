
export function failToInsertBookException(){
    return{
        title:'Fail to insert book',
        message:'Fail to insert book',
        errorCode: "BOOK_ERROR_001"
    }
}
export function failToGetBookListException(){
    return{
        title:'Fail to get book list',
        message:'Fail to get book list',
        errorCode: "BOOK_ERROR_002"
    }
}
export function failToUpdateBookException(){
    return{
        title:'Fail to update book list',
        message:'Fail to update book list',
        errorCode: "BOOK_ERROR_003"
    }
}
export function failToGetBookException(){
    return{
        title:'Fail to get book',
        message:'Fail to get book',
        errorCode: "BOOK_ERROR_004"
    }
}
export function failToDeleteBookException(){
    return{
        title:'Fail to delete book',
        message:'Fail to delete book',
        errorCode: "BOOK_ERROR_005"
    }
}
