import mongoose, { Schema } from "mongoose";

const answerSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  formId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  answer: {
    formData: {
      type: String,
    },
    submission: {
      type: String,
    },
  },
  timeline: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const answerModel = mongoose.model("answerSheet", answerSchema);

export default answerModel;
