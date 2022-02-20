const Express=require('express');
const router=Express.Router();
const modelSigin=require("../Modal/Sigin");
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
router.post("/sigin",async(req,res)=>{
       const {username,password,enterThePassword}=req.body
    
    modelSigin.findOne({user:username,password:password,enterThePassword:enterThePassword}).then(data=>{
        if(data===null){
            res.status(400).json("no find username or password")
        }else{
            var token=jwt.sign({_id:data._id},'mk')
            return res.json({
                message:"success !",
                token:token
            })
        }
    }).catch(err=>{
        res.status(400).json(err)
    })
})
    router.get("/getUser",async(req,res)=>{
        modelSigin.find().then(data=>{
            if(data===null){
                res.status(400).json("no find user or password")
            }else{
                res.status(200).json(data)
                console.log("aaa",req.body.username)
                /* var token=jwt.sign({_id:data._id},'mk')
                return res.json({
                    message:"success !",
                    token:token
                }) */
            }
        })
        .catch(err=>{
            res.status(401).json(err)
        })
    })
    /* routerSigin.save(function(err){
        if(err){
            res.json("error server")
        }else{
            res.status(200).json("post Sigin Success !")
        }
    }) */




module.exports=router;