const express = require("express");
const app = express();


//routes
app.get('/',(req,res)=> {
    res.send('hello node API')
})

app.listen(3000,()=> {
    console.log('Node API app is running on 3000');
})