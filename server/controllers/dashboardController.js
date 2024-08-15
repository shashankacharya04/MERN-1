import Employee from "../models/Employee.js";
import {v4 as uuid} from "uuid"
import cloudinary from "cloudinary"
export const createEmployee =async(req,res)=>{
  try {
    const id = uuid().substring(0,5);
    const {name,email,mobile,designation,gender,course,image} = req.body; //image field should be added here
    console.log("image",image)
    // let profilePic
    // if(image=="" || image == null){
    //     profilePic = gender=="male" ? "https://avatar.iran.liara.run/public/job/operator/male" : "https://avatar.iran.liara.run/public/job/operator/female";
    // }
    const dupEmail = await Employee.findOne({
      email
    })
    if(dupEmail){
      return res.status(400).json({
      error:"email already exists"
      })
    }
       const employee = new Employee({
          id,image,
          name,email,mobile,designation,gender,course
       })
  await employee.save();
  res.status(200).json({
      message:"Employee added sucessfully"
  })
  } catch (error) {
    console.log("error in dashboard cotroller",error);
    res.status(500).json({
        error:error.message
    })
  }
}
export const deleteEmp= async(req,res)=>{
try {
    console.log("delete called")
     const {id} = req.params;
     const delEmp=await Employee.findOneAndDelete({id});
     if(!delEmp){
        return res.status(404).json({
            error:"Employee not found"
        })
     }
     res.status(404).json({
        error:"deleted succesfully"
    })
} catch (error) {
    console.log("error in deleteEmp cotroller",error);
    res.status(500).json({
        error:error.message
    })
}

}
export const editemp= async(req,res)=>{
    try {
         const {id} = req.params;
         const {image,name,email,mobile,designation,gender,course} = req.body;
         const dupEmail= await Employee.findOne({email});
        //  console.log("dup email",dupEmail);
         if(!dupEmail ==null){
            if(dupEmail.email !== email){ //condition to check if email exists excluding this email
                return res.status(400).json({
                    error:"email already exists"
                })
            }
         }
         const editEmp=await Employee.findOneAndUpdate({id},{$set:{
            image,name,email,mobile,designation,gender,course
         }})
         if(!editEmp){
            return res.status(404).json({
                error:"Employee not found"
            })
         }else{
            res.status(200).json({
                message:"edited succesfully"
            })
         }
        
    } catch (error) {
        console.log("error in deleteEmp cotroller",error);
        res.status(500).json({
            error:error.message
        })
    }
    
    }
    export const getAllEmp= async(req,res)=>{
        try {
             const all = await Employee.find();
            //  console.log("all are",all);
             res.status(200).json({
                employees :all
             })
        } catch (error) {
            console.log("error in allEmp cotroller",error);
            res.status(500).json({
                error:error.message
            })
        }
        
        }