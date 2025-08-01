import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/router.js";
import { loggerMiddleware } from "./middleware/loggerMiddleware.js";
import crashRouter from "./routes/users.js";
import uploadRoutes from "./routes/uploadRoutes.js"
import url from "url";
import path from "path";
import fs from "fs";

// Database Config

export let DataBase = []; //Mock DB

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataBaseFile = path.join(__dirname, "./database/users.json"); 

export const loadData = () => {if(fs.existsSync(dataBaseFile)){ const data = fs.readFileSync(dataBaseFile); return JSON.parse(data) } console.log('Wrong Address'); return []};
export const saveData = (data) => {fs.writeFileSync(dataBaseFile, JSON.stringify(data, null, 2))};

/// --- ///

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