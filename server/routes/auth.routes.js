import express from "express";
const route = express.Router();
import {login,logout} from "../controllers/authController.js"
route.post('/login',login);
route.get('/logout',logout);


export default  route