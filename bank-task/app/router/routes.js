const userController=require("../controller/controller")
const router=require("express").Router()


router.get("/",userController.home)
router.get("/userSearch/",userController.findUser)
// router.get("/diposet/:id",)
router.get("/control",userController.showAll)
router.get("/withdraw",userController.withdraw)
router.get("/deposit",userController.deposit)
router.get("/add",userController.add)
router.get("/addMethod",userController.addLogic)
router.get("/single/:id",userController.findUser)
router.get("/delete/:id",userController.del)

module.exports=router