import {toast} from "react-hot-toast"
function handleInputError({username,name,email,password,gender,mobile,course,designation},action){
    if(action == "create"){
        console.log(name,email,mobile,course,designation,gender)
        if(!name || !email || !mobile || !course || !designation || !gender){
            toast.error("please fill all the fields");
            return false;
        }
        // if(mobile.length < 10 || mobile.length > 10){
        //     toast.error("invalid Mobile number");
        //     return false;
        // }
        return true
    }
    if(action ="login"){
        if(!username || !password) {
            toast.error("please fill all the fields")
            return false
        }
        return true
    }
}
export default handleInputError