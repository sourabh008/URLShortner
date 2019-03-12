
var express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors");
const bodyparser=require("body-parser");
const shorturl=require("./models/user")

mongoose.connect("mongodb+srv://sourabh-kamboj:sou@1234@urlshortner-qurvs.mongodb.net/test?retryWrites=true",{ useNewUrlParser: true })
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.get("/user/:urltoshorten",(req ,res ,next)=>{
    const url=t=req.params.urltoshorten;
    const short =Math.floor(Math.random()*10000).toString();
    const schema =new shorturl({
        orignalUrl:url,
        shortenUrl:short
    })
    schema.save(err=>{
        if(err){
            res.send(err)
        }
    })
    res.json(schema)
})
app.get("/:urltoForward",(req,res,next)=>{
    var url=req.params.urltoForward;
    shorturl.findOne({"shortenUrl":url},(err,data)=>{
        if(err){
            return res.send(err);
        }
        var re =new RegExp("^(http|https)://","i");
        var strtoCheck=data.orignalUrl;
        if(re.test(strtoCheck)){
            res.redirect(301,data.orignalUrl)
        }
        else{
            res.redirect(301,"http://"+data.orignalUrl)
        }
    })
})




module.exports=app