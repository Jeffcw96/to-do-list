import BookModel,{BookInterface, BookDocument} from "../models/book";
import { FilterQuery } from 'mongoose'

export async function createBook(param:BookInterface) {
    const book = await BookModel.create(param)
    return book.toJSON();
}

export async function getBookList(query:FilterQuery<BookDocument>) {
    const book = await BookModel.find(query)
    return book
}
