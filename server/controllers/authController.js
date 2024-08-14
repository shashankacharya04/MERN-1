import {v4 as uuid} from 'uuid'
import Login from '../models/login.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';


export async function login(req,res){
   try {
      console.log("called")
        const {username,password} = req.body;
        const admin= await Login.findOne({username,password});
        if(!admin){
           return res.status(404).json({
               error:"admin not found"
           })
        }
     generateTokenAndSetCookie(admin._id,res);
        res.status(200).json({
           message:"logged in successfully"
        })
   } catch (error) {
      console.log("error in login controller",error);
      res.status(500).json({
         error:error.message
      })
   }
}
export function logout(req,res) {
 try {
   res.cookie("jwt","");
   res.status(200).json({
      message:"logged out"
   })
 } catch (error) {
   console.log("error in logout controller",error);
      res.status(500).json({
         error:error.message
      })
 }
}