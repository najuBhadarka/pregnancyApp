import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    questions: {
        type: String
    },
    timeline: {
        type: String,
        required: true
    }
})

const questionModel = mongoose.model('questionsBook', questionSchema)

export default questionModel;