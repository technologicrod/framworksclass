const express = require('express')
const app = express()

const port =  8000;
console.log(app)
app.get('/', (req, res) => {
    res.send('<div>Hello, World!</div>');
    console.log("request received")
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });