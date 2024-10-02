const express = require("express");
const app = express();

app.listen(3080, () => {
    console.log("listening on port 3080")
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
})