require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express()

const noteRoutes = require('./routes/noteRoutes')

app.use(express.json())

app.use("/health", (req, res) => {
    res.json({
        "health": "server"
    })
})

app.use("/notes", noteRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})