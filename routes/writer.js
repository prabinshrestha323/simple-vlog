const express = require("express");
const router = express.Router();
const mongoose= require("mongoose");
const Writer=require("../models/write");



router.post("/writer",(req,res,next)=>{
    const writer= new Writer({
        
       title:req.body.title,
       details:req.body.details
       
    });
    writer.save()
    .then(result=>{
        res.redirect("/more")

        res.status(200).json({
            writer:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
    })


// 
    router.get("/writer",(req,res)=>{
        Writer.find()
        .then(result=>{
            res.render("/more")
            res.status(200).json({
                writer:result
            })
        })
        .catch(error=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        
        })
        })
    module.exports= router