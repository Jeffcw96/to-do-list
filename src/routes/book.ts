import book from "../controller/book"
import { Router } from "express" 

const router = Router()
router.route('/')
    .post(book.createBook)
    .get(book.getBookList)

router.route('/:id')
    .put(book.updateBook)


export default router