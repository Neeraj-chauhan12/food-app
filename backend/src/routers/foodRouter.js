const express = require('express')
const { foodAuthMiddleware } = require('../middlewares/foodAuthMiddleware')
const { createFood } = require('../controllers/foodControllers')
const router=express.Router()
const multer=require('multer')

const upload=multer({
    storage:multer.memoryStorage(),
})

router.post('/',foodAuthMiddleware,upload.single("video"),createFood)


module.exports = router