const express=require("express")
const {home,posts}=require("./controllers/home")
app=express()
app.use(express.json())
app.get("/",home)
app.get("/posts",posts)
app.listen(4000,()=>{
    console.log("server is running")
})