import { Express } from 'express'
import book from './book'

export default function routes(app:Express){
    app.use('/api/book', book)
}