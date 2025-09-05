const express = require("express")
require("dotenv").config();

const userRouter=require('./routers/userRouter')
const foodPartnerRouter=require('./routers/foodPartnerRouter')
const foodRouter=require('./routers/foodRouter')
const cookieParser = require('cookie-parser');


const app=express()
app.use(express.json())
app.use(cookieParser());


app.use('/api/auth/user',userRouter)
app.use('/api/auth/food',foodRouter)
app.use('/api/auth/food-partner',foodPartnerRouter)




module.exports=app;