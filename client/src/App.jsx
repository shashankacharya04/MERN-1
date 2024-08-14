import { useState } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthContext";
import NavBar from "./components/NavBar";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
function App() {
  const { authUser } = useAuth();
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/dashboard" /> : <Login />}
        />

        <Route
          path="/dashboard"
          element={
            authUser ? (
              <div>
                <NavBar /> <DashBoard />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/dashboard/createemployee"
          element={
            authUser ? (
              <div className="h-screen">
                <NavBar /> <CreateEmployee />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/dashboard/employeelist"
          element={
            authUser ? (
              <div className="h-screen">
                <NavBar /> <EmployeeList />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
