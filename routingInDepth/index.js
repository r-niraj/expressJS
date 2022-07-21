const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req,res)=>{
//     res.send('Get Method')
// })

// app.post('/', (req,res)=>{
//     res.send('This is post')
// })

// app.put('/', (req,res)=>{
//     res.send('This is put')
// })

// app.patch('/', (req,res)=>{
//     res.send('This is patch')
// })

// app.all('/', (req,res)=>{
//     res.send('This is all method')
// })

// app.all('/everything', (req,res)=>{
//     res.send('This is all method')
// })

// app.all('*', (req,res)=>{
//       res.send('Page not found')
// })

// app.all('/api/*', (req,res)=>{
//       res.send('Page not found')
// })

// String paths

// app.get('/about', (req,res)=>{
//       res.send('This is about')
// })

// app.get('/contact', (req,res)=>{
//       res.send('This is contact page')
// })

// String pattern paths
// app.get('/ab?cd', (req, res) => {
//     res.send('This will match acd abcd')
// })

// Regular expressionb paths
// app.get(/a/, (req, res) => {
//     res.send('This is run if a present')
// })

// one callback
// app.get('/onecallback', (req, res) => {
//     res.send('One callback')
// })

// more than one callback

// app.get('/callback', (req, res, next) => {
//     console.log('First callback')
//     // next();
// },(req, res)=>{
//     res.send('More Than one call back')
// })

// Array of callbacks
// const cb1= (req,res,next)=>{
//     console.log('First callback')
//     next();
// }
// const cb2= (req,res,next)=>{
    //     console.log('Second callback')
    //     next();
    // }
    // const cb3= (req,res)=>{
    //     console.log('Third callback')
    //     res.send('Array of callbacks')
    // }

// app.get('/callbackarray' , [cb1, cb2,cb3])


// combination of Independent function and array of Function

// const cb1= (req,res,next)=>{
//     console.log('First callback')
//     next();
// }
// const cb2= (req,res,next)=>{
//     console.log('Second callback')
//     next();
// }

// app.get('/callbackarrayandfcn' , [cb1, cb2],(req,res,next)=>{
//     console.log('Third callback')
//     next();
// },(req,res)=>{
//     console.log('Fourth callback')
//     res.send('combination of Independent function and array of Function')
// })

// chain Rule callbacks

app.route('/products')
.all((req,res,next)=>{
    console.log('This will run for all HTTP methods')
    next();
})
.get((req,res)=>{
        console.log('All products')
    })
.post((req,res)=>{
        console.log('Add products')
    })
.put((req,res)=>{
        console.log('Update products')
    })


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
