import { body } from "express-validator";
import { loadData } from "../app.js";

export const registerValidation = [
    body('name')
    .custom((user)=>{ 
        const users = loadData();
        const userExist = users.find((u)=>u.name===user);
        if(userExist){
            throw new Error('Name Already Taken!') 
        }
        return true
    })
    .escape()
    .notEmpty().withMessage('Name shouldnot be left empty')
    .isAlpha().withMessage('Should Only contains Alphabets'),
    // Password 
    body('password')
    .escape()
    .notEmpty().withMessage('Password shouldnot be left empty')
    .isAlphanumeric().withMessage('Should Only contains Alphabets and Numbers'),
    // Email 
    body('email')
    .custom((user)=>{ 
        const users = loadData();
        const emailExist = users.find((u)=>u.email===user);
        if(emailExist){
            throw new Error('Email Already Taken!') 
        }
        return true
    })
    .escape()
    .notEmpty().withMessage('Email shouldnot be left empty')
    .isEmail()
    .normalizeEmail().withMessage('Should be an email'),
]
