import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
   sno:{
    type:String,
    required:true
   },
   username:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   }
},{timestamps:true})
const Login = mongoose.model("Login",loginSchema);
export default Login