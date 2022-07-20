const express = require('express');
const path = require('path');
const blogs = require('../data/blogs');

const router = express.Router();

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../views/index.html'))
})

router.get('/blog', (req,res)=>{
    blogs.forEach(e => {
        console.log(e.title);
    });
    res.sendFile(path.join(__dirname, '../views/blogHome.html'))
})

module.exports = router