const express = require("express")
const app = express()

app.get("/",(req, res) => {
    res.send("Olá mundo!")
});

app.post("/criar-contato", (req, res)=> {
    console.log(req.body);
})
app.listen(4000)