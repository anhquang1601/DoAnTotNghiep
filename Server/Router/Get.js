const express =require('express');
const router=express.Router();
const getpost=require('../Controller/Get.js');
const getPriority1=require("../Controller/Get")
router.get('/',getpost); 
router.get('/get',getPriority1);
var jwt = require('jsonwebtoken');
router.get("/privite/:ID",(req,res,next)=>{
    
    try{
        var token=req.params.ID;
        var ketqua=jwt.verify(token,'mk')
        if(ketqua){
            next();
        }
    }catch(err){
        return res.json({"error server":err})
    }
},(req,res,next)=>{
    res.json("welcome")
})
module.exports=router;