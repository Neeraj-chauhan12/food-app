const app=require('./src/app')
const dbConnection = require('./src/db/dbconnection');
require("dotenv").config();







dbConnection();

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`The app is running ${PORT} port`)
})