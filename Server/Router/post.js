const express =require('express');
const router=express.Router();
const createStudent=require("../Controller/Create")
const postPriorityObject=require("../Controller/Create");
 router.post('/',createStudent);  
router.post('/post',postPriorityObject);
module.exports=router;