export const getUsers = (req, res)=>{
    const userId = req.params.id;
    res.json({message:`Json testing on page number: ${userId}`})
};

export const postUsers = (req, res)=>{
    res.send('<h1>Data</h1>')
};

export const putUsers = (req, res)=>{
    res.send(`<h1>User:${req.params.id}</h1>`)
};

export const deleteUsers = (req, res)=>{
    res.send(`<h1>User Deleted: ${req.params.id}</h1>`)
};

