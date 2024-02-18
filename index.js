const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) =>{
    //console.log(req.url.toString())
    console.log(req.url)

    /*res.setHeader('Content-Type', 'text/plain')
    res.write('Hello world')
    res.end() //check network
    */

    /*res.setHeader('Content-Type', 'text/html')
    res.write('<p>Hello World</p>')
    res.write('<p>I am Iron Man</p>')
    res.write('<p>Snap</p>')
    res.end()
    */

    /*res.setHeader('Content-Type', 'text/html')
    fs.readFile('./views/index.html', (err, data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
    })
    */
    res.setHeader('Content-Type', 'text/html')
    let myurl = './views/'

    if(req.url == '/'){
        myurl += 'index.html'
        res.statusCode = 200
    }
    else if(req.url == '/about'){
        myurl += 'about.html'
        res.statusCode = 200
    }
    else {
        myurl += 'error.html'
        res.statusCode = 404
    }
    fs.readFile(myurl, (err, data)=>{
        if(err){
            res.end(data)
        }
        else{
            res.end(data)
        }
    })

})

server.listen(3000, 'localhost', () => {
    console.log('listening')
})