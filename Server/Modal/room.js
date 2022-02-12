
const mongoose=require("mongoose");
const roomSchema=mongoose.Schema({
    maphong:String,
    tenphong:String,
    kinkroomID:{
        type: Schema.Types.ObjectId, ref: 'kinkroom'
    },
    sinhvienID:[{ type: Schema.Types.ObjectId, ref: 'student'}]
})
const kinkroomSchema=mongoose.Schema({
    maloaiphong:String,
    tenloaiphong:String
})

const room=mongoose.model('room',roomSchema); 

module.exports=room; 