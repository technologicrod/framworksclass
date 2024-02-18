const express = require('express')
const app = express()

const port =  8000;
app.get('/', (req, res) => {
    res.send('<div>Hello, World! <h1>HAHA</h1></div>');
    console.log("request received")
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });