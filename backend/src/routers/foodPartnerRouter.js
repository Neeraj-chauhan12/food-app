const express= require('express')
const { foodPartnerRegister, foodPartnerLogout, foodPartnerLogin } = require('../controllers/foodPartnerController')
const router=express.Router()




router.post('/register',foodPartnerRegister)
router.post('/login',foodPartnerLogin)
router.get('/logout',foodPartnerLogout)
module.exports = router;