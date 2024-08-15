import {toast} from "react-hot-toast"
function handleInputError({username,name,email,password,gender,mobile,course,designation,image},action){
    if(action == "create"){
        console.log(name,email,mobile,course,designation,gender)
        if(!name && !email && !mobile && !course && !designation && !gender &&!gender && !image){
            toast.error("please fill all the fields");
            return false;
        }
        if(!name) {toast.error('enter name');return false}
        if(!email) {toast.error('enter email');return false}
        if(!mobile || mobile.length<10 && mobile.length>10) {toast.error('enter a valid mobile number');return false}
        if(!course) {toast.error('enter course');return false}
        if(!designation) {toast.error('enter designation');return false}
        if(!gender) {toast.error('enter gender');return false}
        if(!image) {toast.error('enter image');return false}
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
        if(!username ) {
            toast.error("please enter username")
            return false
        }
        if(!username ) {
            toast.error("please enter password")
            return false
        }
        return true
    }
}
export default handleInputError