import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useCreateEmployee = () => {
    const [loading,setLoading] = useState(false)
 const createEmp =async({image,name,email,mobile,designation,gender,course})=>{
try {
    console.log("useCretae",name,image)
    setLoading(true);
    const res= await fetch("/api/dashboard/createEmployee",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({name,image,email,designation,mobile,course,gender})});
        console.log("res is",res)
    const data = await res.json();
    if(data.message){
        toast.success(data.message);
    }
    if(data.error){
        toast.error(data.error)
    }
} catch (error) {
    setLoading(false);
    console.log("error in useCreateEmp",error)
    toast.error("something went wrong")
}finally{
    setLoading(false);
}
}
return {createEmp,loading}
}
export default useCreateEmployee
