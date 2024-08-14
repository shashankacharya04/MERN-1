import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from "../context/AuthContext.jsx"
const useLogin = () => {
  const [loading,setLoading] =useState(false);
  const {setAuthUser} = useAuth()
  async function login ({username,password}){
    try {
      setLoading(true);
        const res = await fetch("/api/auth/login",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({username,password})
        })
        
        const data = await res.json();
        if(data.error){
           throw new Error(data.error)
        }
        if(data.message){
          toast.success(data.message);
          localStorage.setItem("admin",JSON.stringify({username,password}));
         setAuthUser({username,password})
        }  
  console.log("data",data);
    } catch (error) {
      setLoading(false);
        console.log("error while logging in ",error);
        toast.error(error.message)
    }finally{
      setLoading (false);
    }
  }
 return {login,loading}
}

export default useLogin
