import { loadData, saveData } from "../app.js";
import bcrypt from "bcryptjs";
import { jsonRefreshToken, jsonToken } from "../utils/jwtSign.js";
import { validationResult } from "express-validator";

export const getUsers = (req, res) => {
  const db = loadData();
  const { id } = req.params;
  const existUser = db.find((user) => user.id == id);
  if (existUser) {
    const { name, email, hPass } = existUser;
    return res.json({ id, name, email, hPass });
  }
  res.status(404).json({ message: "User not found!" });
};

export const postUsers = async (req, res) => {
  const validErrors = validationResult(req);
  if(!validErrors.isEmpty()){
    const errorBox = {};
    validErrors.array().forEach((err)=>{
        if (!errorBox[err.param]) {
        errorBox[err.param] = [];
      }
      errorBox[err.param].push(err.msg);      
    })
    return res.json(errorBox);    
  }
  // ENDPOINT-LOGIC
  const db = loadData();
  const { name, email, password } = req.body;
  const hPass = await bcrypt.hash(password, 10);
  const id = db.length + 1;
  const newUser = { id, name, email, hPass };
  db.push(newUser);
  saveData(db);
  res.status(201).json(newUser);
};

export const login = async (req, res) => {
  try {
    const { name, password } = req.body;
    const db = loadData();
    const userExist = db.find((user) => user.name === name);
    if (!userExist) {
      return res.json({ Error: "User doesnot exist" });
    }
    const correctPass = await bcrypt.compare(password, userExist.hPass);
    
    const token = jsonToken(userExist.id);
    const refreshToken = jsonRefreshToken(userExist.id);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    if (!correctPass) {
      return res.json({ Error: "Password is not correct" });
    }
    return res.json({ token, Success: "You are logged in!" });
  } catch (err) {
    console.log(err);
  }
};
