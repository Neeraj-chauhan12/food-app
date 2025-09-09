const express = require('express')
const { foodAuthMiddleware } = require('../middlewares/foodAuthMiddleware')
const { createFood, getFoodData } = require('../controllers/foodControllers')
const router=express.Router()
const multer=require('multer')
const { get } = require('mongoose')

const upload=multer({
    storage:multer.memoryStorage(),
})

router.post('/',foodAuthMiddleware,upload.single("video"),createFood)

router.get("/data",foodAuthMiddleware,getFoodData)


module.exports = router