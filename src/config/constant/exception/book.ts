export default{
    failToInsertBookException: () =>{
        return{
            title:'Fail to insert book',
            message:'Fail to insert book',
            errorCode: "BOOK_ERROR_001"
        }
    },
    failToGetBookListException: () =>{
        return{
            title:'Fail to get book list',
            message:'Fail to get book list',
            errorCode: "BOOK_ERROR_002"
        }
    }
}