
const mongoose=require("mongoose");
const listServiceSchema=mongoose.Schema({
    soluong:Number,
    phongID:{
        type: Schema.Types.ObjectId, ref: 'room'
    },
    dichvuID:{
        type: Schema.Types.ObjectId, ref: 'service'
    }
})
const listService=mongoose.model('listService',listServiceSchema)

module.exports=listService; 