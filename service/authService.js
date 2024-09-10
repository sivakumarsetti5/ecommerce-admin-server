const loginDAO = require("../dao/authDAO")

function loginService(req){
    const data = req.body.data
    loginDAO(data)

}
module.exports = loginService