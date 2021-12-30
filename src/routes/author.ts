import { Router } from "express" 
import author from "@/controller/author"
import validate from '@/middleware/validateRequest'
import schema from "@/schema/author"

const router = Router()
router.route('/')
    .post(validate(schema.createSchema),author.createAuthor)    

router.route('/:id')
    .get(author.getAuthor)

router.route('/:id/books')
    .get(author.getAuthorWithBooks)

export default router