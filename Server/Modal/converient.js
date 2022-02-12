
const mongoose=require("mongoose");
const convenientSchema=mongoose.Schema({
    matiennghi:String,
    tentiennghi:String
})
const converient=mongoose.model('converient',convenientSchema);

module.exports= converient;