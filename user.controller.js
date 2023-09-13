import { userModel } from "./dbconnection/user.schema.js"



export const addusers = async(req, res) => {

    const{name,email,password,age}=req.body
    
 let data = await  userModel.insertMany({name,email,password,age})

  res.json({message:"sucsess",data})
}



export const getusers = async(req,res)=>{

    let data =  await userModel.find()

    res.json({messae:"sucsesss",data})
}


export const deleteuser =async(req,res)=>{
    const {_id}=req.body

    let data =  await userModel.findByIdAndDelete({_id})

     res.json({messae:"sucsesss",data})
    
}


export const updateusers = async(req,res)=>{
    const {name,email,password,age,_id}=req.body

    let data =  await userModel.findByIdAndUpdate({_id},{name,email,password,age})

     res.json({messae:"sucsesss",data})
    
}