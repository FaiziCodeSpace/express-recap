import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/router.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use('/', userRoutes)

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})