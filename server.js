const express=require("express");
require('dotenv').config();
const dbConfig=require("./config/dbConfig");

const app=express();

app.use(express.json());



const userRoute=require("./routes/userRoutes");
const adminRoute=require("./routes/adminRoutes");
const doctorRoute=require("./routes/doctorRoutes");

app.use('/api/user',userRoute);
app.use('/api/admin',adminRoute);
app.use('/api/doctor',doctorRoute);

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`Listening on port ${port}`));