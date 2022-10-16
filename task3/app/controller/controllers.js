const deal= require("./deal")

const dbfile="app/db/tasks.json"
let completed=true



const home=(req,res)=>{
    const allTask=deal.readFromJson(dbfile)
    let completed=true
    res.render("home",{
        allTask,
    })
}
const add=(req,res)=>{
    res.render("add",{
        pageTitle:"add task",
        title:"add task"
    })
}
const addMethod=(req,res)=>{
    const task={title:Date.now(),status:false ,...req.query}
    const allTask=deal.readFromJson(dbfile)
    allTask.push(task)
    deal.writeToJson(allTask,dbfile)
    res.redirect("/")
}
const taskcompltion=(req,res)=>{
    let completed=true
    const allTask=deal.readFromJson(dbfile)
    const taskTitle=req.params.title
    const task=allTask.find(t=>t.title==taskTitle)
    task.status=true
    console.log(req.params)
    deal.writeToJson(allTask,dbfile)
    if(!task){
        completed=true
    }
    
    res.redirect("/")

}
const single=(req,res)=>{
    let found=true
    const allTask=deal.readFromJson(dbfile)
    const taskTitle=req.params.title
    const task=allTask.find(t=>t.title==taskTitle)
    if(!task) {found=false}
    res.render("single",{
        pageTitle:"single task",
       task,
       found
    })
}
const del =(req,res)=>{
    let found =true
    const taskTitle=req.params.title
    const allTask=deal.readFromJson(dbfile)
    const task = allTask.findIndex(u=> u.title == taskTitle)
    if(task==-1) found=false
    else allTask.splice(task, 1)
    deal.writeToJson(allTask, dbfile)
    res.redirect("/")

}
module.exports={
    add,home,addMethod,taskcompltion,single,del
}