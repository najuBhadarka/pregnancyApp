import mongoose from "mongoose"

const connectDB = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("DB Connectd");
    }).catch((err) => {
        console.log("err", err)
    })
};

export default connectDB;