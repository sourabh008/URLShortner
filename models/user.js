const mongoose=require("mongoose");
const schema=mongoose.Schema;
const urlSchema= new schema({
    orignalUrl:String,
    shortenUrl:String
})
const models=mongoose.model("urlShorter",urlSchema);
module.exports=models