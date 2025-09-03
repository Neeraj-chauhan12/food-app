const app=require('./src/app')
const dotenv=require('dotenv');
const dbConnection = require('./src/db/dbconnection');




dotenv.config();





dbConnection();

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`The app is running ${PORT} port`)
})