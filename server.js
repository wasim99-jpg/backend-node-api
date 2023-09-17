
//npm install dotenv --save
require('dotenv').config()

//npm i nodemon
//npm run dev

//npm i express
const express = require("express");

//npm i mongoose
const mongoose = require("mongoose")

//import route productRoute
const productRoute = require ('./Routes/productRoute')

const errorMiddleware = require('./middleware/errorMiddleware')

//npm npm install cors
const cors = require('cors')

//express is a framework for node.js
const app = express();


const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL


//------------------------------------------------
//**middleware START
//

//enable few website(frontend) to access the backend
//var corsOptions = {
//    origin: 'http://example.com',
 //   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

//enable all CORS request
//kiranya boleh enable for frontend to fetch backend data
app.use(cors())

//accept input using json
app.use(express.json())

//accept input using multipart form in postman/imsomnia
app.use(express.urlencoded({extended:false}))

//
//middleware END**
//------------------------------------------------

//------------------------------------------------
//**routes START
//
app.use('/api/products',productRoute);

//
//routes END**
//------------------------------------------------

//contoh utk get method
app.get('/',(req,res)=> {
    
    res.send('hello node API')
})


//contoh utk get method
app.get('/blog',(req,res)=> {
    res.send('hello my name wasim')
})

//handle error
app.use(errorMiddleware);

//------------------------------------------------
//key utk connect app ke mongodb, username/pass admin/1234
//login mongodb,create new database
//pilih server AWS utk database
// copy key "mongodb+srv......" ke dalam connect 
//
mongoose
.connect(MONGO_URL)
.then(() => {
    console.log("connected to mongoDB")
    app.listen(PORT,()=> {
        console.log(`Node API app is running on ${PORT}`);
    }) 
}).catch((error) => {
    console.log(error)
})
//------------------------------------------------

//POST =  create the information
//GET = read information
//PUT = update the information
//DELETE = delete the information