const jwt=require("jsonwebtoken")
require("dotenv").config()
const authenticate = (req,res,next)=>{
const token=req.headers?.authorization?.split(" ")[1]
if(token){
const decoded=jwt.verify(token,process.env.jwt_secret_key)
if(decoded){
next()
} else {
res.send("Please Login")
}
} else {
res.send("Please Login")
}
}
module.exports={
authenticate
}