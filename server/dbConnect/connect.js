import mongoose from "mongoose";

const connect = async()=>{
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected successfully');
} catch (error) {
    console.log("something went wrong while connecting to database",error)
}
}
export default connect