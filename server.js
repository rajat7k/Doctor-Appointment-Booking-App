const express=require("express");
require('dotenv').config();
const dbConfig=require("./config/dbConfig");

const app=express();

app.use(express.json());



const userRoute=require("./routes/userRoutes");
const adminRoute=require("./routes/adminRoutes");
const doctorRoute=require("./routes/doctorRoutes");
const path=require('path');

app.use('/api/user',userRoute);
app.use('/api/admin',adminRoute);
app.use('/api/doctor',doctorRoute);



const port=process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static("client/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client/build/index.html"));
    });
  }

 
app.get("/",(req,res)=>res.send("Welcome To The Project"));
app.listen(port,()=>console.log(`Listening on port ${port}`));