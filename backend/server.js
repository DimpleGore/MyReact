var express = require('express')
var cors = require('cors')
require('dotenv').config()
var mongoose = require('mongoose')

var app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(
     process.env.MONGODB_URI || 'mongodb+srv://Dimple:Dimplegore@975@dimple.llwb2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
     {
       useCreateIndex: true,
       useFindAndModify: false,
       useNewUrlParser: true,
       useUnifiedTopology: true,
     },
     (err) => {
       if (err) throw err;
     }
   );
   

var PORT = process.env.PORT || 5000
app.use(require('./Routes/userRoutes'))

if(process.env.NODE_ENV === 'production'){
     app.use(express.static('client/build'))
   }
   


app.listen(PORT,()=>{
     console.log('server is running on port '+PORT)
})

