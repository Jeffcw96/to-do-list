import book from "../controller/book"
import { Router } from "express" 

const router = Router()
router.route('/')
    .post(book.createBook)
    .get(book.getBookList)

router.route('/:id')
    .get(book.getBook)
    .put(book.updateBook)
    .delete(book.deleteBook)


export default router