import toast from 'react-hot-toast';
import { useState } from 'react';
const useHandleSendImg = () => {
    const [imageUrl,setImageUrl] =useState(null);
 const handleSendImg =(e)=>{
     const file = e.target.files[0];
     console.log("url is",file)
     if(file && file.type.startsWith("image/jpeg") || file.type.startsWith("image/png")){
        const fr = new FileReader(); 
        console.log("fr is",fr)
        fr.readAsDataURL(file);  
        fr.onloadend =()=>{
            console.log(fr.result)  ; 
                if(file.type.startsWith("image/jpeg")) {setImageUrl(fr.result); setVideoUrl(null);  }
           // if(file.type.startsWith("video/")) {setVideoUrl(fr.result); setImageUrl(null);   }
           
        }     
     }else{
        toast.error("file not supported");
        setImageUrl(null);
        console.log("errron in handlesend image")
     }
 }
return {handleSendImg,imageUrl,setImageUrl}
}


export default useHandleSendImg