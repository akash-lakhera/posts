const express=require("express")
const {home,posts}=require("./controllers/home")
app=express()
const port=process.env.PORT||4000
app.use(express.json())
app.get("/",home)
app.get("/posts",posts)
app.listen(port,()=>{
    console.log("server is running")
})