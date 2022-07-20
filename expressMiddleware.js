const express = require('express');
const path = require('path');
const app = express();
const port = 5000

const myMiddleware = (req,res,next)=>{
    console.log(req);
    next();
}

app.use(express.static(path.join(__dirname, 'public')))
app.use(myMiddleware);

app.get('/hello' , (req,res)=>{
    res.send('This is another home');
})
app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})