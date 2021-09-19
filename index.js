const express = require('express')
const cors = require('cors')
const data = require('./data')
const app = express()

app.use(cors('*'))

app.get('/api/json', (req, res) => {
    const page = parseInt(req.query.page)
    const limit = 10

    const startLimit = ((page - 1) * limit)
    const endLimit = page * limit

    const result = {}
    result.count = data.user.length
    result.user = data.user.slice(startLimit, endLimit)
    res.json(result)

})

const Port = process.env.PORT || 3000

app.listen(Port, () => {
    console.log(`server running on ${Port}`);
})