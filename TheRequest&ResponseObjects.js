const express = require("express");
const app = express(); 

app.listen(3080, () => {
    console.log("listening on port 3080")
})

app.use((req, res) => {
    console.log("We got a new request!!")
    res.send('<h1> this is my webpage</h1>')
})