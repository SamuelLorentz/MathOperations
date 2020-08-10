const operations = require("./math/operations")
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = 8080

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('You can use this API to Sum, Sub, Mult and Div operations'))

app.post('/sum', (req, res) => {
    console.log(req.body)

    var sum = operations.sum(req.body.x, req.body.y)

    res.setHeader('Content-Type', 'application/json');
    res.send({
        "answer": sum
    })
})

app.post('/div', (req, res) => {
    console.log(req.body)

    var div = operations.div(req.body.x, req.body.y)

    res.setHeader('Content-Type', 'application/json');
    res.send({
        "answer": div
    })
})

app.post('/sub', (req, res) => {
    console.log(req.body)

    var sub = operations.sub(req.body.x, req.body.y)

    res.setHeader('Content-Type', 'application/json');
    res.send({
        "answer": sub
    })
})

app.post('/mult', (req, res) => {
    console.log(req.body)

    var mult = operations.mult(req.body.x, req.body.y)

    res.setHeader('Content-Type', 'application/json');
    res.send({
        "answer": mult
    })
})

app.listen(port,
    () => console.log(`API rodando na ${port}`))

