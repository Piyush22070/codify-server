import app from './app.js';
import connectDB from './db/index.js';
import  dotenv from "dotenv";
dotenv.config({path : './env'})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("Server is Connected at port ",process.env.PORT )
    })
})
.catch((error)=>{
    console.log("MONGO db Connection failed !!!",error);
})
