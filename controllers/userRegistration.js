export const registerUser = (req, res) => {
    const {name, email} = req.body;
    console.log(`User ${name} with email ${email} registered!`);
    res.json({message:`User ${name} with email ${email} registered!`})
}

export const userDetails = (req, res) => {
    res.json({
        params: req.params,
        query: req.query,
        body: req.body,
    })
}