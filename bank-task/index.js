const express=require("express")
const app=express()
const hbs=require("hbs")
const path=require("path")
const router=require("./app/router/routes")
const Port=process.env.Port||3000
require("dotenv").config()


const viewsFiles=path.join(__dirname,"./frontend/views")
const layouts=path.join(__dirname,"./frontend/layouts")


app.set("view engine","hbs")
app.set("views",viewsFiles)
hbs.registerPartials(layouts)
app.use(router)
app.use(express.urlencoded({extended:true}))


app.all("*", (req,res)=> res.render("err404", { pageTitle:"page not found" }) )

app.listen(Port,()=>{
    console.log(`https://localhost/${Port}`)
})

