const express =require("express");
const router=express.Router();
const userControllers=require('../controllers/user');

router.get("/users",userControllers.users);
router.get("/users/:userId",userControllers.getUserById);
router.get("/user-by-name-and-age",userControllers.getUserByNameAndAge);

//create user
router.post('/users',userControllers.createUser);

//create many user
router.post('/createManyUser',userControllers.createManyUser);


module.exports=router;