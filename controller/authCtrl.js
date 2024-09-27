var express = require('express')
const loginService = require('../service/authService')
var router = express.Router()

router.post('/login',async function (req,res,next){
    const result =await loginService(req)
    res.send(result)
})

// http://localhost:2020/auth/login

module.exports = router