const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authetcication');
var checkRole = require('../services/checkRole');
router.post('/add',auth.authecateToken,checkRole.checkRole,(req,res)=>{
    let product =req.body;
    var query = "insert into(name,ticketsId,description , price ,status ) values(?,?,?,?,'true')";
    connection.query(query,[product.name,product.categoryId,product.desciption,product.price],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"Product Added Successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})
    router.get('/get',auth.authecateToken,checkRole.checkRole,(req,res,next)=>{
     
        var query = "insert into(name,ticketsId,description , price ,status ) values(?,?,?,?,'true')";
        connection.query(query,(err,results)=>{
            if(!err){
                return res.status(200).json(results);
            }
            else{
                return res.status(500).json(err);
            }
        })
    })
    router.get('/getTickets/:id',auth.authecateToken,checkRole.checkRole,(req,res,next)=>{
     const id = req.params.id;
        var query = "insert into(name,categoryId,description , price ,status ) values(?,?,?,?,'true')";
        connection.query(query,[id],(err,results)=>{
            if(!err){
                return res.status(200).json(results);
            }
            else{
                return res.status(500).json(err);
            }
        })
    })
    router.get('/getById/:id',auth.authecateToken,checkRole.checkRole,(req,res,next)=>{
        const id = req.params.id;
           var query = "insert into(name,categoryId,description , price ,status ) values(?,?,?,?,'true')";
           connection.query(query,[id],(err,results)=>{
               if(!err){
                   return res.status(200).json(results[0]);
               }
               else{
                   return res.status(500).json(err);
               }
           })
       })
       router.get('/update',auth.authecateToken,checkRole.checkRole,(req,res,next)=>{
        const id = req.params.id;
           var query = "insert into(name,categoryId,description , price ,status ) values(?,?,?,?,'true')";
           connection.query(query,[id],(err,results)=>{
               if(!err){
                   return res.status(200).json(results[0]);
               }
               else{
                   return res.status(500).json(err);
               }
           })
       })
       router.get('/delete',auth.authecateToken,checkRole.checkRole,(req,res,next)=>{
        const id = req.params.id;
           var query = "insert into(name,categoryId,description , price ,status ) values(?,?,?,?,'true')";
           connection.query(query,[id],(err,results)=>{
               if(!err){
                   return res.status(200).json(results[0]);
               }
               else{
                   return res.status(500).json(err);
               }
           })
       })
       router.get('/updateStatus',auth.authecateToken,checkRole.checkRole,(req,res,next)=>{
        const id = req.params.id;
           var query = "insert into(name,categoryId,description , price ,status ) values(?,?,?,?,'true')";
           connection.query(query,[id],(err,results)=>{
               if(!err){
                   return res.status(200).json(results[0]);
               }
               else{
                   return res.status(500).json(err);
               }
           })
       })
module.exports = router;