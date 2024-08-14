import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { createEmployee, deleteEmp, editemp, getAllEmp } from "../controllers/dashboardController.js";
const route = express.Router();

route.post('/createEmployee',protectRoute,createEmployee);
route.delete('/deleteEmp/:id',protectRoute,deleteEmp);
route.patch('/editEmp/:id',protectRoute,editemp);
route.get('/allEmployees',protectRoute,getAllEmp);

export default route