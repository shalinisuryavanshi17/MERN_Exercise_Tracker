const { Router } = require("express");
const User=require('../models/user')
const router=Router()
router.route('/').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('ERRor'+err))
})

router.route("/add").post((req,res)=>{
    const username=req.body.username
    const newUser = new User({username})
    newUser.save()
    .then(()=>res.json("user added successfully!!!!"))
    .catch(err=>res.json("Error "+err))
})
module.exports=router