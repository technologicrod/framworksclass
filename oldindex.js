const express = require('express')
const app = express()
const { students, hello } = require('./mymodule')
app.set('view engine', 'ejs')
const port =  8000;

//console.log(students);
app.use((req,res, next) => {
    console.log("Request made")
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method>: ${req.method}`)
    next();
})
app.get('/', (req, res) => {
    res.render('index', {heading: "ex battalion music"})
    //res.sendFile('./views/index', { root: __dirname})
});

app.get('/about', (req, res) => {
    res.render('about',{studentData: students, hellofunc: hello})
    //res.sendFile('./views/about', { root: __dirname})
});

app.get('/home',  (req, res) =>{
    //res.redirect('/')
})

app.get('/aboutus',  (req, res) =>{
    //res.redirect('/about')
})

app.use((req, res) =>{
    //res.status(404).sendFile('./views/error', { root: __dirname })
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });