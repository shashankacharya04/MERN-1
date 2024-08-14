import express from "express"
import authRoute from "./routes/auth.routes.js"
import dashBoardRoute from "./routes/dashboard.routes.js"
import connect from "./dbConnect/connect.js"
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import cloudinary from "cloudinary";
const app = express();
const port = 5000 
dotenv.config();


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});

app.use(express.json({limit:'50mb'}));
app.use(cookieParser());
app.use("/api/auth/",authRoute);
app.use("/api/dashboard/",dashBoardRoute)
app.listen(port,()=>{
    connect();
    console.log(`listening on port ${port}`);
})