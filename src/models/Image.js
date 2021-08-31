import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Image = new Schema(
    {
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        created: {
            type: String,
            required: true
        }
    },
    { versionKey: false }
)

export default mongoose.model(`Image`, Image, `Image`)