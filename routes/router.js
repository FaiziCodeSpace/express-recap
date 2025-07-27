import { Router } from "express";

const router = Router();

router.get('/', (req, res)=>{
    res.send('<h1>HOME</h1>')
});

router.post('/data', (req, res)=>{
    res.send('<h1>Data</h1>')
});

router.put('/data/:id', (req, res)=>{
    res.send(`<h1>User:${req.params.id}</h1>`)
});

router.delete('/data/:id', (req, res)=>{
    res.send(`<h1>User Deleted: ${req.params.id}</h1>`)
});

export default router;