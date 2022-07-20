const express = require('express');
const app = express();
const port = 5000

app.get('/', (req,res)=>{
    res.send("This is home page");
})

app.get('/:city', (req,res)=>{
    res.send("Welcome to " + req.params.city);
})

app.get('/hello/:name', (req,res)=>{
    res.send("Hello " + req.params.name);
})


app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})