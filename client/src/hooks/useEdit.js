import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useEdit = () => {
    const [loading,setLoading]=useState(false)
  const edit = async(editData,id)=>{
    try {
        console.log("editData",editData);
        console.log("editid",id);
        setLoading(true)
        const res = await fetch(`/api/dashboard/editEmp/${id}`,{
            method:"PATCH",
            headers:{"content-type":"application/json"},
            body:   JSON.stringify(editData)
        })
        const data = await res.json;
        if(data.message){
            toast.success("edited successfully");
        }
        if(data.error){
            toast.error(data.error)
            console.log("eror in useEdit",data)
        }
    } catch (error) {
        setLoading(false)
        toast.error(error.message)
    }finally{
        setLoading(false)
    }
  }
  return {edit,loading}
}

export default useEdit
