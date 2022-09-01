const express = require('express');
const router = express.Router();
const Doctor=require('../models/doctorModel')
const authMiddleware=require("../middleware/authMiddleware")
router.post('/get-doctor-info-by-user-id',authMiddleware, async(req,res)=>{
    try{
        const doctor= await  Doctor.findOne({userId:req.body.userId});
        res.status(200).send({
            success:true,
            message:"Doctor info fetch successfully",
            data:doctor,
        })
    }
    catch(error){
        res.status(500).send( {message:"Error getting doctor Info",success:false,error})
    }
})
module.exports=router;