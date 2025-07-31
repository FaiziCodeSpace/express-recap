import { DataBase } from "../app.js";

export const getUsers = (req, res)=>{
  const {id} = req.params;
  const existUser = DataBase.find((user)=>user.id==id);
    if(existUser){
      return res.json(existUser)
    }else if(!id){
      res.json(DataBase); 
    }
    res.status(404).json({message:"User not found!"})
};

export const postUsers = (req, res)=>{
    const {name, password} = req.body;
    const id = DataBase.length + 1;
    const newUser = {id, name, password};
    DataBase.push(newUser);
    res.json(DataBase);
};







