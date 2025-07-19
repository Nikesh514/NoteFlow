import mongoose, { Document } from "mongoose"

export interface INote extends Document {
    title: string
    content: string
    user: mongoose.Types.ObjectId
}

const noteSchema = new mongoose.Schema <INote> ({
    title: {
        type: String,
        
    }
})