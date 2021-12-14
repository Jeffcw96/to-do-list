import book from "../controller/book"
import { Router } from "express" 

const router = Router()
router.route('/')
    .post(book.createBook)



export default router