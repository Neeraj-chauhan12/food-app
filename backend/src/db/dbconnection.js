const mongoose=require('mongoose')


const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("mongodb is connected")
    })
    .catch(()=>{
        console.log("error in mongodb connection")
    })
}

module.exports=dbConnection