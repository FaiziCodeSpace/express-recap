import { loadData, saveData } from "../app.js";
import bcrypt from "bcryptjs";


export const getUsers = (req, res)=>{
  const db = loadData();
  const {id} = req.params;
  const existUser = db.find((user)=>user.id==id);
    if(existUser){
      const {name} = existUser;
      return res.json({id, name});
    }
    res.status(404).json({message:"User not found!"})
};

export const postUsers = async(req, res)=>{
    const db = loadData(); 
    const {name, email, password} = req.body;
    const hPass = await bcrypt.hash(password, 10);
    const id = db.length + 1;
    const newUser = {id, name, email, hPass};
    db.push(newUser);
    saveData(db);
    res.json(newUser);
};

export const login = async(req, res) => {
  try{
    const {name, password} = req.body;
  const db = loadData();
  const userExist = db.find((user)=>user.name === name);
  if(!userExist){return res.json({Error:'User doesnot exist'})};
  const correctPass = await bcrypt.compare(password, userExist.hPass);
  if(!correctPass){return res.json({Error:'Password is not correct'})};
  return res.json({...userExist, Success:'You are logged in!'});
  }catch(err){
    console.log(err);
  }
}


