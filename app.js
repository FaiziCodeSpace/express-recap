import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/router.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/', userRoutes);

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({error: 'Something went wrong!'});
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})