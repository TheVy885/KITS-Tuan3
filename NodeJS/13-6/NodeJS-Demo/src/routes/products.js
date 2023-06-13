const express = require('express');
const router = express.Router();

router.get("/get-all-products",(req, res)=>{
    res.send([
        {
            name:"Product 1",
            price:5000
        },{
            name:"Product 2",
            price:10000
        }
    ]);
});
module.exports=router;