const router=require("express").Router()
const Todo=require('../models/Todo')
const validateTodoInput =require('../validation/todoValidation')
const notifier = require('node-notifier');
const SendNotification =require('../functions/Notification')
var isEmpty = require('is-empty');

// const webpush = require('web-push');
// const url = require('url-parse');

// const publicVapidKey = "BHe_81jEpOuNFktVJwJLgnDdzQgy9_Kv7HiFiTXsaqFZFZaWQ2uNlFJ3az73WUK9Ee4djHBFvpBfNjGmR4h8h0U";
// const privateVapidKey = "SLmeL3SlnhG41rsnsFIrc7IdNZgnvvb5kUL3etWyrVw";


router.post('/add/todo',(req,res)=>{

    const { errors, isValid } = validateTodoInput(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}


    
    timeobj=SendNotification(req.body);
    console.log(timeobj);
    

    const newTodo=new Todo({todo:req.body.todo,
        description:req.body.description,
        hours:req.body.hours,
        minutes:req.body.minutes,
        seconds:req.body.seconds,
        timeobj:timeobj})
       
    newTodo.save()
. then(()=> {
    
    console.log('Todo saved')
    
   
     res.redirect('/')
    
})
.catch((err)=>{console.log(err)})
})
 

.get('/delete/todo/:_id',(req,res)=>{
    const {_id}=req.params;
    Todo.deleteOne({_id})
    .then(()=>{
        console.log('deleted')
        res.redirect('/')
    })
    .catch((err)=>{console.log(err)})

 })



 .patch('/Complete/todo/:_id',(req,res)=>{
    const {_id}=req.params;
    Todo.updateOne({_id:{_id}},{
        $set:{
            status:1
        }
    })
    .then(()=>{
        console.log('Completed')
        res.redirect('/')
    })
    .catch((err)=>{console.log(err)})

 })

 router.patch('/update/todo/:_id',(req,res)=>{
    const {_id}=req.params;
    const   timeobj=SendNotification(req.body,req.params.id);
    Todo.updateOne({_id:{_id}},{
        $set:{
            todo:req.body.todo,
            description:req.body.description,
        hours:hours,
        minutes:minutes,
        seconds:seconds        
    }
    })
    .then(()=>{
        console.log('updated')
        res.redirect('/')
    })
    .catch((err)=>{console.log(err)})

 })
 
module.exports=router;