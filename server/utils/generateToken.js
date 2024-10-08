import jwt from "jsonwebtoken"
const generateTokenAndSetCookie =(userId,res)=>{
    console.log("userId in tokens",userId)
    const Token =  jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })
    console.log("token is",Token)
    res.cookie("jwt",Token,{
        maxAge:15 * 24 * 60 * 60 * 1000,
        httpOnly:true, // prevent XSS attacks cross-site scripting attcks
        sameSite:"strict", //CSRF attacks  cross site requewst forgery attacks
        secure:process.env.NODE_ENV !== "development"  // this becomes true if in development
    })
}
export default generateTokenAndSetCookie