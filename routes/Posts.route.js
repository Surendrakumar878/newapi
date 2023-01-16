const express=require("express")
const {PostModel}=require("../models/posts.model")
const postsRouter=express.Router()
//for all the following things authentication is required.
postsRouter.get("/", async(req,res)=>{
    const userId = req.headers.authorization.split(" ")[0];
    const task = await PostModel.find();
    //   console.log(task);
    res.send(task);
// res.send({"mgs":"note"})
})
postsRouter.post("/create", async (req,res)=>{
const payload=req.body
const new_=new PostModel(payload)
await new_.save()
res.send({"msg":"post Created"})
})
postsRouter.patch("/update/:postID", async(req,res)=>{
    const payload=req.body;
    const ID=req.params.postID;
    console.log(ID)
    try{
        await PostModel.findByIdAndUpdate({_id:ID},payload)
        // await new_note.save()
        res.send({"msg":"updated data successfully"})
    
    }catch(err){
       
    }
//logic to update the notes
})
postsRouter.delete("/delete/:postID", async(req,res)=>{
    const ID=req.params.postID;
    try{
        await PostModel.findByIdAndDelete({_id:ID})
        res.send({"msg":"deleted data successfully"})
    
    }catch(err){
        console.log(err);
        res.send({"msg":"someting went wrong,pls try again later"})
    }
//logic to delete the notes
})
module.exports={
    postsRouter
}
