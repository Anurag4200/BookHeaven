import express from "express"
const app=express()
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
import bookroute from "./routes/book.route.js"
import userroute from "./routes/user.route.js"

dotenv.config()
const PORT= process.env.PORT || 4000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/BookStore")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB", error);
    });

app.use("/book",bookroute)
app.use("/user",userroute)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})