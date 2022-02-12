
const express=require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const routerStudent=require("./Router/post")
const getStudent=require("./Router/Get")
const app=express();
const cors = require('cors');
/* const mongose=require('mongoose'); */
const utl="mongodb+srv://admin:123@cluster0.bibyv.mongodb.net/DoAnTotNghiep?retryWrites=true&w=majority";
const PORT=process.env.PORT|| 1000;

app.use(bodyParser.json({limit:'30mb'}));
app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}));
app.use(cors());

app.use('/post',routerStudent)
app.use('/get',getStudent)
mongoose.connect(utl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
  console.log('connectted to db');
  app.listen(PORT,()=>{
    console.log(`server listen runing port ${PORT}`);
  });
})
.catch((err)=>{
  console.log('err',err);
})