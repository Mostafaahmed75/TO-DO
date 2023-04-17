const router=require("express").Router()
const Todo=require('../models/Todo')


router.get("/",async(req,res)=>{
    const allTodo=await  Todo.find()
    console.log(allTodo);
    res.render("index",{todo:allTodo});
})

router.get("/completed",async(req,res)=>{
    const allTodo=await  Todo.find({status:1})
    res.render("index",{todo:allTodo});
})


module.exports=router;