import mongoose from "mongoose";

const bookScema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        publishYear:{
            type:Number,
            required:true,
        }
    }
)

export const Book = mongoose.model('Cat',bookScema);