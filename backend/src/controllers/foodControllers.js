const foodModel=require('../model/foodModel')
const storageService=require('../services/service')
const likeModel=require('../model/likesModel')
const savedModel=require('../model/saveModel')
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


exports.likedFood=async(req,res)=>{
    const foodId=req.body;
    const user=req.user;

    const isAlreadyLiked=await foodModel.findOne({user:user._id, food:foodId})
    if(isAlreadyLiked){
        return res.status(400).json({message:"You have already liked this food item"})
    }

    await foodModel.findByIdAndUpdate(foodId,
        {$inc:{likesCount:-1}}
    )
    res.status(200).json({message:"Food item unliked successfully"})


    const newLike=new likeModel.create({
        user:user._id,
        food:foodId
    })
    await newLike.save();

    await foodModel.findByIdAndUpdate(foodId,
        {$inc:{likesCount:1}}
    )
    res.status(200).json({message:"Food item liked successfully"})

}

exports.savedFood=async(req,res)=>{
    const foodId=req.body;
    const user=req.user;

    const isAlreadySaved=await savedModel.findOne({user:user._id, food:foodId})
    if(isAlreadySaved){
        return res.status(400).json({message:"You have already saved this food item"})
    }

    await savedModel.findByIdAndUpdate(foodId,
        {$inc:{savedCount:-1}}
    )
    res.status(200).json({message:"Food item unsaved successfully"})

    const newSaved=new savedModel.create({
        user:user._id,
        food:foodId
    })
    await newSaved.save();

    await foodModel.findByIdAndUpdate(foodId,
        {$inc:{savedCount:1}}
    )   

    res.status(200).json({message:"Food item saved successfully"})

}


exports.getSaveFood=async(req,res)=>{
    const user=req.user;
    const savedFoods=await savedModel.find({user:user._id}).populate('foodItemId')
    if(!savedFoods || savedFoods.length===0){
        return res.status(404).json({message:"No saved food items found"})
    }
    res.status(200).json({message:"Saved food items retrieved successfully", savedFoods})
}
