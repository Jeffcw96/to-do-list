import mongoose from "mongoose";

export interface BookInterface{
    author: string;
    book_collection: string;
    name: string;
}

export interface BookDocument extends BookInterface, mongoose.Document{
    createdAt: Date;
    updatedAt: Date;
}

const bookSchema = new mongoose.Schema({
    author: {
        type:String,
    },
    book_collection: {
        type: String,
    },
    name: {
        type: String,
    }
}, {
    timestamps: {
        createdAt: 'created_datetime_utc',
        updatedAt: 'updated_datetime_utc'
    },
    versionKey:false
});



const BookModel = mongoose.model<BookDocument>("Book", bookSchema)

export default BookModel
