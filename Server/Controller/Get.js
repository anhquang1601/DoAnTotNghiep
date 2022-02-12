const PostModel = require("../Modal/student");
const getPriority=require("../Modal/priorityObject")
const getpost=async (req,res)=>{
    try{
        const posts=await PostModel.find().populate('doituongID').then((data,err)=>{
          if(data){
            res.status(200).json(data);
          }
        })
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json({error:err})
    }
}
const getpriority=async (req,res)=>{
    try{
        const priority=await getPriority.find();
        console.log('post',priority);
        res.status(200).json(priority);
    }catch(err){
        res.status(500).json({error:err})
    }
}
/*  module.exports=getpriority;  */
 module.exports=getpost; 