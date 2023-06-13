const express =require("express");
const router=express.Router();
const userControllers=require('../controllers/user');

router.get("/get-all-users",userControllers.users);
router.get("/getUser/:userId",userControllers.getUserById);
router.get("/getUserByNameAndAge",userControllers.getUserByNameAndAge);

//create user
router.post('/createUser',userControllers.createUser);

//create many user
router.post('/createManyUser',userControllers.createManyUser);


module.exports=router;