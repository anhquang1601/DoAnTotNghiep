const express =require('express');
const router=express.Router();
const getpost=require('../Controller/Get.js');
const getPriority1=require("../Controller/Get")
router.get('/',getpost); 
router.get('/get',getPriority1);
module.exports=router;