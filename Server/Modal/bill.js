const mongoose=require("mongoose");

const billSchema=mongoose.Schema({
    thoigiantro:Date,
    sotienmotthang:Number,
    tongtien:Number,
    sinhvienID:{
        type: Schema.Types.ObjectId, ref: 'student'
    },
    phongID:{
        type: Schema.Types.ObjectId, ref: 'room'
    }
})


const bill=mongoose.model('bill',billSchema);
module.exports= bill;