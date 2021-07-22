var express = require('express')
var cors = require('cors')
require('dotenv').config()

var app = express()

app.use(express.json())
app.use(cors())

var PORT = process.env.PORT || 5000
app.use(require('./Routes/userRoutes'))

if(process.env.NODE_ENV === 'production'){
     app.use(express.static('client/build'))
   }
   


app.listen(PORT,()=>{
     console.log('server is running on port '+PORT)
})

