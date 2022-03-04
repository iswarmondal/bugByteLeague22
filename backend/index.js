const app = require('express')();
const detenv = require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res)=>{
    res.status(201).send("You did it, you killed the bug")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})