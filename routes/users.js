import { Router } from 'express';

const router = Router();

// Middleware-Router Level

router.use((req, res, next)=>{
    console.log(`Router level Middleware has been Triggered`.red);
    next();
})

router.get('/userDetails', (req, res)=>{
    res.json({Notice: 'Router Level Middleware Corner'});
})

router.get('/crash', ()=>{
    throw new Error('APP IS CRASHED!')
})

export default router;

