const express=require('express');
const route=express.Router();
const User=require('../models/userModel')
const Doctor=require('../models/doctorModel')
const authMiddleware=require('../middleware/authMiddleware')


route.get("/get-all-doctors",authMiddleware,async(req,res)=>{
        try {
            const doctors= await Doctor.find({});
            res.status(200).send({message:"Doctor fetch successfully",success:true,data:doctors});
            
        } catch (error) {
            console.log(error);
            res.status(500).send({message:"Error appling doctor account",success:false,error})
        }
});


route.get("/get-all-users",authMiddleware,async(req,res)=>{
    try {
        const user= await User.find({});
        res.status(200).send({message:"User fetch successfully",success:true,data:user});
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Error appling user account",success:false,error})
    }
})

route.post("/change-doctor-account-status",authMiddleware,async(req,res)=>{
    try {
        const {doctorId,status}=req.body;
        const doctor=await Doctor.findByIdAndUpdate(doctorId,{
            status, 
        });
        const user=await User.findOne({_id:doctor.userId});
        const unseenNotifications=user.unseenNotifications;
        unseenNotifications.push({
           type:"new-doctor-request-changed",
           message:`Your doctor account has beed ${status}`,
           onClickPath: "/notifications",
        });
        user.isdoctor = status === "approved" ? true : false;
        await user.save();
        res.status(200).send({
            message:"Doctor status update successfully",
            success:true,
            data:doctor
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:`Error appling  doctor account `,success:false,error})
    }
})

module.exports=route;



