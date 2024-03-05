const express = require('express')
const app = express()

const port =  8000;

app.use((req,res, next) => {
    console.log("Request made")
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method>: ${req.method}`)
    next();
})
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname})
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname})
});

app.get('/home',  (req, res) =>{
    res.redirect('/')
})

app.get('/aboutus',  (req, res) =>{
    res.redirect('/about')
})

app.use((req, res) =>{
    res.status(404).sendFile('./views/error.html', { root: __dirname })
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });