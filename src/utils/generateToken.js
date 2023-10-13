import jwt from "jsonwebtoken"
import refreshTokenModel from "../models/refreshTokens.js"

const generateToken = (email) => {
    return jwt.sign({ email: email }, process.env.JWT_SECRET, {
        expiresIn: '3600s'
    })
}

const refreshToken = async (id) => {
    let token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: '20d'
    })
    await refreshTokenModel.create({
        userId: id,
        refreshToken: token
    })
}

export { generateToken, refreshToken }