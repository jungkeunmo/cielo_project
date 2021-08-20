import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
    {
        userId: {
            type: String,
            required: true
        },
        userPassword: {
            type: String,
            required: true
        }
    },
    { versionKey: false }
)

export default mongoose.model(`User`, User, `User`)