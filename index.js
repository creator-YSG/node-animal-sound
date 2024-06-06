const { constants } = require('buffer')
const express = require('express')
var cors = require('cors')
const { request } = require('http')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    console.log(name)

    if(name == "dog") {
        res.json({'sound':'멍멍'})
    } else if(name == "cat"){
        res.json({'sound':'야옹'})
    } else {
        res.json({'sound':'알수없음'})
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
