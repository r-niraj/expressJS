const homeController = (req, res)=>{
    // res.send('Home Page')
    // res.render('index');
    res.render('index', {'name' : 'Amit'});
}

export {homeController}