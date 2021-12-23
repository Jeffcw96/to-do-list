import { decimalToJson } from "@/utils/mongooseUtil";
import { encryptionBuffer, decryptionBuffer } from "@/utils/encryption";
import mongoose from "mongoose";

export interface BookInterface{
    author: string;
    book_collection: string;
    name: string;
    weight:number;
    hidden_data:string
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
        },
        weight:{
            type: mongoose.Types.Decimal128
        },
        hidden_data:{
            type:Buffer,
            set:encryptionBuffer,
            transform:decryptionBuffer
        }
    }, 
    {
        timestamps: {
            createdAt: 'created_datetime_utc',
            updatedAt: 'updated_datetime_utc'
        },
        versionKey:false
    });

bookSchema.set('toJSON', {
    transform(doc,ret){
        decimalToJson(ret)
        return ret
    }
})

const BookModel = mongoose.model<BookDocument>("Book", bookSchema)

export default BookModel
