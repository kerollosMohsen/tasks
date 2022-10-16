const deal=require("./deal")

const dbFile="app/dp/users.json"



const home=(req,res)=>{
    const allUsers=deal.readFromJson(dbFile)
    res.render("home",{
        allUsers
    })

}

const findUser=(req,res)=>{
    let isFound= true
    const givenId=req.query.userId
    const allUsers=deal.readFromJson(dbFile)
    const user=allUsers.find(u=>u.id==(givenId||req.params.id))
    console.log()
    if (!user){isFound=false}
    res.render("single",
    {
        user,
        isFound
    })
}
const showAll=(req,res)=>{
    const allUsers= deal.readFromJson(dbFile)
    res.render("control",{
        allUsers
    })
}

const withdrawPage=(req,res)=>{
    const userid=req.params.id
    const allUsers=deal.readFromJson(dbFile)
    const user=allUsers.find(u=>u.id==userid)
    // console.log(user)
    res.render("withdraw",{
        user
    })
}

const withdraw=(req,res)=>{
    let isFound=true
    const wantedAmount=parseInt(req.query.take)
    const userid=req.query.userid
    const allUsers=deal.readFromJson(dbFile)
    const user=allUsers.find(u=>u.id==userid)
    let userAmount= parseInt(user.blance)
    if(!user){isFound=false}
    if(wantedAmount<=userAmount){
        user.blance=(userAmount-wantedAmount).toString()
        deal.writeToJson(allUsers,dbFile)
        res.render("single",{
            isFound,
            user
        })
    }else{
        console.log("unable to do transaction")
        res.render("single",{
            isFound,
            user
        })
    }
   

}
const deposit=(req,res)=>{
    let isFound=true
    const wantedAmount=parseInt(req.query.add)
    const userid=req.query.userid
    const allUsers=deal.readFromJson(dbFile)
    const user=allUsers.find(u=>u.id==userid)
    let userAmount= parseInt(user.blance)
    if(!user){isFound=false}
    console.log(typeof wantedAmount)
    if(wantedAmount<=userAmount||wantedAmount>=userAmount){
        user.blance=(userAmount+wantedAmount).toString()
        deal.writeToJson(allUsers,dbFile)
        res.render("single",{
            isFound,
            user
        })
    }else{
        console.log("unable to do transaction")
        res.render("single",{
            isFound,
            user
        })
    }
   

}
const add =(req,res)=>{
    res.render("add",{
        title:"add customer"
    })
}
const addLogic=(req,res)=>{
const allUsers=deal.readFromJson(dbFile)
const user={id:Date.now(), ...req.query}
allUsers.push(user)
deal.writeToJson(allUsers,dbFile)
res.redirect("/control")
}
const del =(req,res)=>{
    const allUsers=deal.readFromJson(dbFile)
    const userid =req.params.id
    const user=allUsers.findIndex(u=>u.id ==userid)
    allUsers.splice(user,1)
    deal.writeToJson(allUsers,dbFile)
    res.redirect("/control")
    
}


module.exports={
    home,findUser,showAll,withdrawPage,withdraw,deposit,add,addLogic,del
}