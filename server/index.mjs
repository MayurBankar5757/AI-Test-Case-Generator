// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();

// import User from './models/User.js';


// const app = express();
// app.use(express.json());

// const connectDB = async () => {
//   const conn = await mongoose.connect(process.env.MONGODB_URL);
//   if (conn) {
//     console.log(`MongoDB connected`);
//   }
// };


// // POST /signup
// app.post("/signup", async (req, res) => {
//   const {
//     name,
//     email,
//     password,
//     mobile,
//   } = req.body;

//   const user = new User({
//     name: name,
//     email: email,
//     password: password,
//     mobile: mobile,
//   });

//   try {
//     const savedUser = await user.save();

//     res.json({
//       success: true,
//       data: savedUser,
//       message: "Signup successful"
//     })
//   }
//   catch (e) {
//     res.json({
//       success: false,
//       message: e.message
//     })
//   }
// });

// // POST /login
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.json({
//       success: false,
//       message: "Please provide email and password"
//     })
//   }

//   const user = await User.findOne({
//     email: email,
//     password: password
//   }).select("name email mobile")

//   if(user){
//     return res.json({
//       success: true,
//       data: user,
//       message: "Login successful"
//     });
//   }else{
//     return res.json({
//       success: false,
//       message: "Invalid credentials"
//     });
//   }
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port: ${PORT}`)
//   // connectDB();
// });






import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
// const express = require("express")
import mongoose from 'mongoose';
// const dotenv = require("dotenv")
// const cors = require("cors")
import cors from 'cors'
import axios from 'axios';
// const axios = require("axios")
import User from './models/User.js';
// const User = require("./models/User.js")
import OpenAI from 'openai'
// const mongoose= require("mongoose")




const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())


const openai = new OpenAI({
  // apiKey:"sk-proj-wHx8fX5XMDCQWjEoJhK2T3BIbkFJONXsH2Xw1EF0qr0dRLo0"
  

  // apiKey:"sk-proj-ev6wrXIZYegIV4EgZDk3T3BIbkFJKmXH99F77jUmWXx918g5"
  apiKey:process.env.OPENAI_API_KEY
})
const MONGODB_URL=process.env.MONGODB_URI

mongoose.connect(MONGODB_URL)
.then(()=>{
  console.log("connected to databasee")
})
.catch((e)=>{
  console.log(e)
  console.log("failed to connect to database")
})

// const connectDB = async () => {
//   const conn = await mongoose.connect(process.env.MONGODB_URL);
//   if (conn) {
//     console.log(`MongoDB connected`);
//   }
// };









// POST /signup
app.post("/signup", async (req, res) => {
  const {
    name,
    email,
    password,
    mobile,
  } = req.body;

    const data = new User({
    name: name,
    email: email,
    password: password,
    mobile: mobile,
  });


  try {
    const check= await User.findOne({email:email})
    if(check){
      res.json("exist")
    }
    else{
      res.json("notexist")
      await User.insertMany([data])
    }
  } 
  catch (e) {
    res.json("notexist")
  }


  // console.log(user)

  // try {
  //   const savedUser = await user.save();

  //   res.json({
  //     success: true,
  //     data: savedUser,
  //     message: "Signup successful"
  //   })
  // }
  // catch (e) {
  //   res.json({
  //     success: false,
  //     message: e.message
  //   })
  // }
});

// POST /login
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.json({
//       success: false,
//       message: "Please provide email and password"
//     })
//   }

//   const user = await User.findOne({
//     email: email,
//     password: password
//   }).select("name email mobile")

//   if(user){
//     return res.json({
//       success: true,
//       data: user,
//       message: "Login successful"
//     });
//   }else{
//     return res.json({
//       success: false,
//       message: "Invalid credentials"
//     });
//   }
// });


app.get("/",cors(),(req,res)=>{

})

app.post("/",cors(),async(req,res)=>{
  const{email,password}=req.body

  try {
    const check= await User.findOne({email:email,password:password})
    if(check){
      res.json("exist")
    }
    else{
      res.json("notexist")
    }
  } 
  catch (e) {
    res.json("notexist")
  }

})




app.post("/generate-test-cases", async (req, res) => {
  const { code, specifications } = req.body;
  console.log(code, specifications);

  try {
    // Call OpenAI API to generate test cases
    const data = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": `Specifications: ${specifications} \n Code: ${code} Please create test cases for the above code by following specifications, test cases should be simple and point-wise, also suggest some instructions for the tester` }],
      max_tokens: 100,
      temperature: 0.7
    });

    // Destructure the response to get the test cases
    const { choices } = data;
    const testCases = choices.length > 0 ? choices[0].message.content : `Not able to generate test cases, try again`;

    res.json({
      success: true,
      testCases: testCases
    });
    console.log(testCases)
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  // connectDB();
});
