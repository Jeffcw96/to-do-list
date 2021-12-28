import { Express } from 'express'
import book from './book'
import author from './author'

export default function routes(app:Express){
    app.use('/api/', book)
    app.use('/api/author', author)
}