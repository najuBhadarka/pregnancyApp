import mongoose, { Schema } from "mongoose";

const answerSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    formData: [
        {
            question: {
                type: String,
                required: true,
            },
            answer: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                required: true
            },
            options: {
                type: [String || Number],
            }
        },
    ],
    timeline: {
        type: String,
        required: true
    }
})

const answerModel = mongoose.model('answerSheet', answerSchema)

export default answerModel;