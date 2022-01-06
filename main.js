const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/coverage/map', function (req, res, next) {
    res.send()
})

app.listen(8080, function () {
    console.log('hi')
})