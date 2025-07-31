import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/router.js";
import { loggerMiddleware } from "./middleware/loggerMiddleware.js";
import crashRouter from "./routes/users.js";
import uploadRoutes from "./routes/uploadRoutes.js"

export let DataBase = []; //Mock DB

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
     
app.use(loggerMiddleware);
app.use('/api/users', userRoutes); 
app.use('/api/upload', uploadRoutes);
app.use('/', crashRouter);

app.use((err, req, res, next)=>{
    console.error('Error:', err.message);
    res.status(500).json({error: 'Something went wrong!'});
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})