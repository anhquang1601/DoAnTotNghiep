const mongoose=require("mongoose");

const listConvenientSchema=mongoose.Schema({
   
    maphong:String,
    phongID:{
        type: Schema.Types.ObjectId, ref: 'room'
    }
})
const listConvenient=mongoose.model('listConvenient',listConvenientSchema);
module.exports=listConvenient;