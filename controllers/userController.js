import { DataBase, loadData, saveData } from "../app.js";

export const getUsers = (req, res)=>{
  const db = loadData();
  const {id} = req.params;
  const existUser = db.find((user)=>user.id==id);
    if(existUser){
      return res.json(existUser);
    }else if(!id){
      res.json(DataBase); 
    }
    res.status(404).json({message:"User not found!"})
};

export const postUsers = (req, res)=>{
    const db = loadData(); 
    const {name, password} = req.body;
    const id = db.length + 1;
    const newUser = {id, name, password};
    db.push(newUser);
    saveData(db);
    res.json(db);
};







