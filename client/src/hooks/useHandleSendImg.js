import toast from 'react-hot-toast';
import { useState } from 'react';
const useHandleSendImg = () => {
    const [imageUrl,setImageUrl] =useState(null);
 const handleSendImg =(e)=>{
     try {
      const file = e.target.files[0];
     console.log("url is",file)
     if(file && file.type.startsWith("image/jpeg") || file.type.startsWith("image/png")|| file.type.startsWith("image/jpg")){
        const fr = new FileReader(); 
        console.log("fr is",fr)
        fr.readAsDataURL(file);  
        fr.onloadend =()=>{
            console.log(fr.result)  ; 
                if(file.type.startsWith("image/jpeg") || file.type.startsWith("image/png") || file.type.startsWith("image/jpg")) 
                  {
                     setImageUrl(fr.result);  
                     return fr.result;
                  }
        }     
     }else{
        toast.error("file not supported");
        setImageUrl(null);
        console.log("errron in handlesend image")
     }
     } catch (error) {
      console.log("error in handleSendImg",error)
      toast.error("error while adding image")
     }
 }
return {handleSendImg,imageUrl,setImageUrl}
}


export default useHandleSendImg