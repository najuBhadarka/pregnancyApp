import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
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
                type: [String || Number],
            },
        },
    ],
    timeline: {
        type: String,
        required: true
    }
})

const questionModel = mongoose.model('questionsBook', questionSchema)

export default questionModel;