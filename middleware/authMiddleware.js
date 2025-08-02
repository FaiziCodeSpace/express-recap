import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(req.headers.authorization);
    if(!token){ return res.json({Error: "Access Denied. Invalid Token!"})}
    try{
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.user = decode.id;
        next();
    }catch(err){
        return res.status(401).json({Error: "Token Missing!"})
    }
}