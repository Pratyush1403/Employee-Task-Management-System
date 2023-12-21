const express = require('express');
const port=3500;
const app = express();

app.get("/",(req,res)=>{
    res.send(`App is working on port ${port}`);
});

app.listen(port)