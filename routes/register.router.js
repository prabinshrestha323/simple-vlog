const express= require("express");
const router=express.Router()
const mongoose =require("mongoose");
const Register= require("../models/register")
const bodyParser= require("body-parser")
const jsonParser = bodyParser.json()
const bcrypt =require("bcrypt")


router.post("/register",jsonParser,(req,res,next)=>{
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            return 
                error:err
        
        }
        else
        {
        const register = new Register({
            
            email:req.body.email,
            password:hash
        })
        register.save()
        .then(result=>{
            res.redirect("/login")
           res.status(200).json({
               register:result
               
           })
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
        
        
        }
    })
})


module.exports=router