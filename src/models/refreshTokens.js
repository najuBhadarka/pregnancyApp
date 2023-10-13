import mongoose, { Schema } from "mongoose";

const refreshTokenSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
        required: true,
    }
});

const refreshTokenModel = mongoose.model("refreshToken", refreshTokenSchema);

export default refreshTokenModel;