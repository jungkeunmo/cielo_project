import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Settings = new Schema(
    {

    },
    { versionKey: false }
)

export default mongoose.model(`Settings`, Settings, `Settings`)