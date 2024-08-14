import React from 'react'
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
const useLogout = () => {
    const {setAuthUser} = useAuth()
  async function logout (){
  try {
    const res = await fetch('/api/auth/logout');
    const data = await res.json();
    toast.success(data.message);
    localStorage.setItem("admin",null);
    setAuthUser(null)
  } catch (error) {
    toast.error(error.message)
  }

  }
  return {logout}
}

export default useLogout
