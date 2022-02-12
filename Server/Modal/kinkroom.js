const mongoose=require("mongoose");

const kinkroomSchema=mongoose.Schema({
    maloaiphong:String,
    tenloaiphong:String
})
const kinkroom=mongoose.model('kinkroom',kinkroomSchema)

module.exports= kinkroom;