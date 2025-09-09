const foodModel=require('../model/foodModel')
const storageService=require('../services/service')
const {v4: uuid}=require('uuid')


exports.createFood=async(req,res)=>{
    const {name,description}=req.body;
    const fileUploadResult=await storageService.uploadFile(req.file.buffer, uuid())
    const foodItem=await foodModel.create({
        name,
        description,
        video:fileUploadResult.url,
        foodPartner:req.foodPartner._id

    })
    res.status(201).json({message:"food created succuffully"})

}


exports.getFoodData=async(req,res)=>{
    const foodItems=await foodModel.find({})
    res.status(200).json({message:"Food items retrieved successfully", foodItems})
}