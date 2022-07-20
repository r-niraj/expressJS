const express = require('express');
const app = express();
const path = require('path')
const port = 5000

app.get('/', (req,res)=>{
    res.send("Hello There");
});

app.get('/about', (req,res)=>{
    // res.send("about");
    // res.send(__dirname);
    
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})