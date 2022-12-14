const express= require("express")
const hbs=require("hbs")
const path=require("path")
const app=express()
const router=require("./app/router/router")
require("dotenv").config()
const Port= process.env.Port||3400

// const staticFiles=(express.static(path.join(__dirname,"frontend/static")))
const viewsFiles= path.join(__dirname,"frontend/views")
const layoutsFiles= path.join(__dirname,"frontend/layouts")
// console.log(layoutsFiles)
app.set("view engine","hbs")
app.set("views",viewsFiles)
// app.use(staticFiles)
hbs.registerPartials(layoutsFiles)
console.log(process.env.DBURL)


app.use(router)
app.listen(Port,()=>{
    console.log(`localhost:${Port}`)
})