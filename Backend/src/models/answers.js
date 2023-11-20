import mongoose, { Schema } from "mongoose";

const answersSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    questions: [
        {
            questionTitle: {
                type: String,
                required: true,
            },
            optionType: {
                type: String,
                required: true,
            },
            options: {
                type: [String],
            },
            answers: {
                type: String
            }
        },
    ],
    timeline: {
        type: String,
        required: true
    }
})

const answersModel = mongoose.model('answerBook', answersSchema)

export default answersModel;