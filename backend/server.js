var express = require('express')
var cors = require('cors')

var app = express()

app.use(express.json())
app.use(cors())

var PORT = process.env.PORT || 5000
app.use(require('./Routes/userRoutes'))


app.listen(PORT,()=>{
     console.log('server is running on port '+PORT)
})

