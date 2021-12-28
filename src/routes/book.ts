import book from "../controller/book"
import { Router } from "express" 

const router = Router()
router.route('/:author_id/book')
    .post(book.createBook)
router.route('/')
    .get(book.getBookList)

router.route('/:id')
    .get(book.getBook)
    .put(book.updateBook)
    .delete(book.deleteBook)


export default router