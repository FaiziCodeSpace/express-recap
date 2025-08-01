import { jwt } from "jsonwebtoken";

export const jsonToken = (userId) => {
    return jwt.sign({userId} , process.env.JWT_KEY, {
        expiresIn: '1h',
    })
} 