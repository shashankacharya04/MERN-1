import React, { useEffect,useState } from 'react'
import useDelete from './useDelete';

const useGetEmp = () => {
 const [emps,setEmp] =useState([]);
 useEffect(()=>{
    const getEmp = async()=>{
        try {
            const res = await fetch("/api/dashboard/allEmployees");
            const data =await  res.json();
            setEmp(data.employees);
            console.log("data is ",data)
        } catch (error) {
          toast("something went wrong")
        }
       }
       getEmp();
 },[])
  return {emps}
}

export default useGetEmp
