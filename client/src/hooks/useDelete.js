import React from 'react'
import toast from 'react-hot-toast';

const useDelete = () => {
 const empDelete = async(id)=>{
try {
    const res = await fetch(`/api/dashboard/deleteEmp/${id}`,{
        method:"DELETE",
        headers:{"content-type":"application/json"}
    })
    const data = await res.json;
    if(data.error){
        toast.error(data.error)
    }
} catch (error) {
    toast(error.message)
}
 }
 return {empDelete}
}

export default useDelete
