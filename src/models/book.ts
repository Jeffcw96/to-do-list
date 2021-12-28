import { decimalToJson } from "@/utils/mongooseUtil";
import { encryptionBuffer, decryptionBuffer } from "@/utils/encryption";
import mongoose from "mongoose";

export interface BookInterface{
    ref_id:string,
    author_ref_id: string;
    book_collection: string;
    name: string;
    weight:number;
    hidden_data:string
}

export interface BookDocument extends BookInterface, mongoose.Document{
    created_datetime_utc: Date;
    updated_datetime_utc: Date;
}

const bookSchema = new mongoose.Schema({
        ref_id:{
            type:String
        },
        author_ref_id: {
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
        },
        published_datetime_utc:{
            type:Date,
            default: new Date()
        }
    }, 
    {
        timestamps: {
            createdAt: 'created_datetime_utc',
            updatedAt: 'updated_datetime_utc'
        },
        collection:"Book",
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
