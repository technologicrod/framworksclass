const express = require('express')
const app = express()
const { students, hello } = require('./mymodule')
app.set('view engine', 'ejs')
const port =  8000;
const weather = require('weather-js')
weather.find({ search: 'Manila, Philippines', degreeType: 'C' }, function(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(JSON.stringify(result, null ,2))
    // Result will be an array of weather data
    if (result && result.length > 0) {
        const location = result[0].location;
        const current = result[0].current;

        console.log(`Weather in ${location.name}`);
        console.log(`- Condition: ${current.skytext}`);
        console.log(`- Temperature: ${current.temperature}°C`);
        console.log(`- Feels Like: ${current.feelslike}°C`);
        console.log(`- Humidity: ${current.humidity}%`);
        console.log(`- Wind: ${current.winddisplay}`);
    } else {
        console.log('Weather information not found for Manila.');
    }
});

//console.log(students);
app.use((req,res, next) => {
    console.log("Request made")
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method>: ${req.method}`)
    next();
})
app.get('/davao', (req, res) =>{
    weather.find({search: 'Davao, PH', degreeType: 'C'}, function(err, result) {
        if(err) {console.log(err);}
        else{
            let data = {
                url: req.url,
                weatherdavao: eval(JSON.stringify(result, null, 2))
            }
            res.render('davao', data);
        }
       
      });
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