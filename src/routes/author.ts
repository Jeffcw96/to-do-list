import author from "@/controller/author"
import { Router } from "express" 

const router = Router()
router.route('/')
    .post(author.createAuthor)

router.route('/:id/books')
    .get(author.getAuthorWithBooks)

export default router