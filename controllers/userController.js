import { loadData, saveData } from "../app.js";
import bcrypt from "bcryptjs";


export const getUsers = (req, res)=>{
  const db = loadData();
  const {id} = req.params;
  const existUser = db.find((user)=>user.id==id);
  const {name} = existUser;
    if(existUser){
      return res.json({id, name});
    }else if(!id){
      res.json(db); 
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

