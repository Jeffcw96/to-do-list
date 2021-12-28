import mongoose from "mongoose";

export interface AuthorInterface{
    ref_id: string;
    name: string;
    age: number;
    country:number;
}

export interface AuthorDocument extends AuthorInterface, mongoose.Document{
    created_datetime_utc: Date;
    updated_datetime_utc: Date;
}

const authorSchema = new mongoose.Schema({
        ref_id:{
            type:String
        },
        name: {
            type:String,
        },
        age:{
            type: Number
        },
        country:{
            type:String
        }
    }, 
    {
        timestamps: {
            createdAt: 'created_datetime_utc',
            updatedAt: 'updated_datetime_utc'
        },
        collection:"Author",
        versionKey:false
    }

);

const AuthorModel = mongoose.model<AuthorDocument>("Author", authorSchema)

export default AuthorModel
