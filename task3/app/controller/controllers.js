const deal= require("./deal")
const Task=require("../db/models/taskModel")
const dbfile="app/db/tasks.json"
let completed=true

const mongoose = require("mongoose")
require("dotenv").config()
mongoose.connect(process.env.DBURL)

const home=async(req,res)=>{
    // const allTask=deal.readFromJson(dbfile)
   try{
    const  allTask= await Task.find()
    res.render("home",{
        allTask,
    })
   }
   catch(e){

   }
}
const add=(req,res)=>{
    res.render("add",{
        pageTitle:"add task",
        title:"add task"
    })
}
const addMethod=async(req,res)=>{
  try{  const task= new Task(req.query)
    console.log(task)
  await  task.save()
  res.redirect("/")
}
  catch(e){
    res.send(e.message)
  }
    // const task={title:Date.now(),status:false ,...req.query}
    // const allTask=deal.readFromJson(dbfile)
    // allTask.push(task)
    // deal.writeToJson(allTask,dbfile)
    // res.redirect("/")
}
const taskcompltion=async(req,res)=>{
    try{
        Task.findOneAndUpdate({title:req.params.title},{Status:true},(err,data)=>{
            if(err){
                console.log(err)
            }else{
    res.redirect("/")

                console.log(data)
            }
        })

    }
    catch(e){}
}
const single=async(req,res)=>{
    let found=true
    const allTask= await Task.find()
    const taskTitle=req.params.title
    const task=allTask.find(t=>t.title==taskTitle)
    if(!task) {found=false}
    res.render("single",{
        pageTitle:"single task",
       task,
       found
    })
}
const del =async(req,res)=>{
    try{
        Task.findOneAndRemove({title:req.params.title},(err,data)=>{
            if(err){
                console.log(err)
            }else{
    res.redirect("/")

                console.log(data)
            }
        })

    }
    catch(e){}

}
module.exports={
    add,home,addMethod,taskcompltion,single,del
}