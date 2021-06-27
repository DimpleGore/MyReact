const router = require('express').Router()
const userController = require('../Controller/userController')

router.get('/userdata',userController.userdata)
router.get('/pieinfo',userController.pieinfo)

module.exports = router