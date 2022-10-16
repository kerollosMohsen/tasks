
const router=require("express").Router()
const userMetheds=require("../controller/controllers")
router.get("/",userMetheds.home)
router.get("/add",userMetheds.add)
router.get("/addMethod",userMetheds.addMethod)
router.get("/taskCompleted/:title",userMetheds.taskcompltion)
router.get("/single/:title",userMetheds.single)
router.get("/delete/:title",userMetheds.del)
module.exports = router