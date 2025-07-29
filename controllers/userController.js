export const getUsers = (req, res)=>{
    res.json({message:`Json testing`});
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

export const getProfile = (req, res) => {
  const { id } = req.params;
  const { showDetails, sort } = req.query;

  res.status(200).json({
    id,
    showDetails,
    sort,
  });
};



export const createProfile = (req, res, next) => {
  try {

    const { name, email } = req.body;

  
    res.status(201).json({
      message: "Profile created",
      user: { name, email },
    });

  } catch (err) {
    next(err);
  }
};

