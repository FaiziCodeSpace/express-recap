import jwt from "jsonwebtoken";

export const jsonToken = (userId) => {
    return jwt.sign({id : userId} , process.env.JWT_KEY, {
        expiresIn: '1h',
    })
} 

export const jsonRefreshToken = (userId) => {
    return jwt.sign({id : userId} , process.env.REFRESH_JWT_KEY, {
        expiresIn: '7d',
    })
}