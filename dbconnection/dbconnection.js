import mongoose from "mongoose";

export const databaseconn = ()=>{

mongoose.connect('mongodb://127.0.0.1:27017/project').then(()=>{
    console.log("database is connected");
}).catch((err)=>{
   console.log("database ERORRRR");
})
 
}