const express = require("express")
require("dotenv").config();
const cors = require("cors")

const userRouter=require('./routers/userRouter')
const foodPartnerRouter=require('./routers/foodPartnerRouter')
const foodRouter=require('./routers/foodRouter')
const cookieParser = require('cookie-parser');
const app=express()

app.use(cors({
    origin: 'https://neeraj-food1.netlify.app', // Replace with your frontend URL
    credentials: true,
     methods:["GET","POST","UPDATE","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type","Authorization","X-Requested-With"]
}));



app.use(express.json())
app.use(cookieParser());


app.use('/api/auth/user',userRouter)
app.use('/api/auth/food',foodRouter)
app.use('/api/auth/partner',foodPartnerRouter)




module.exports=app;