const student=require("../Modal/student");
const priorityObject=require("../Modal/priorityObject");

//post student
const createStudent=async(req,res)=>{
    try{
        const postStudent= new student({
            hoten:req.body.hoten,
            namsinh:req.body.namsinh,
            diachi:req.body.diachi,
            sdt:req.body.sdt,
            email:req.body.email,
            masv:req.body.masv,
            phongID:"61e8d1ea5b2c756eff0a06fb",
            doituongID:"6205316308cda0c7078518b7"
        })
        await postStudent.save();
        res.status(200).json(postStudent);
    } catch(err){
       console.log(err)
    
      }
}

//post priorityObject
const postPriorityObject=async(req,res)=>{
    try{
        const priority=new priorityObject({
            tendoituonguutien:req.body.tendoituonguutien,
            mauutien:req.body.mauutien
        })
        await priority.save();
        res.status(200).json(priority)
    }catch(err){
        console.log(err)
    }
}
/* module.exports=createStudent; */  
module.exports=postPriorityObject;  