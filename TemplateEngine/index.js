// const express = require('express');
import express from 'express';
import {join} from 'path';

const app = express();
const port = 5000;
import router from './routes/routes.js'

//setup the directory where we keeps views files
// app.set('views', './views');

//setting up view engine
app.set('view engine', 'ejs')

//Static file
app.use(express.static(join(process.cwd(), 'public')))

//Loading URL
app.use('/', router)

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
