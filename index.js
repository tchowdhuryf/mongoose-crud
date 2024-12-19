require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const conn = require("./config/db")
conn()

//home route
app.get("/", (req, res) =>{
    res.send("Home Page!")
})

app.listen(port, ()=> {
    console.log(`listening on port: ${port}`)
})