import colors from 'colors';

export const loggerMiddleware =(req, res, next)=>{
    console.log(`[${new Date().toString()}] [${req.method}] [${req.url}]`.rainbow);
    next();
}