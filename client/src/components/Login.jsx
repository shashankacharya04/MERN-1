import React from "react";
import toast from "react-hot-toast";
import useLogin from "../hooks/useLogin";
import { useState } from "react";
import handleInputError from "../hooks/handleInputErrors";
const Login = () => {
  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });
  const { login, loading } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("admin data", admin);
    const val = handleInputError(
      { username: admin.username, password: admin.password },
      "login"
    );
    val && login(admin);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setAdmin({ ...admin, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
        />
        <button disabled={loading}>enter</button>
      </form>
    </div>
  );
};

export default Login;
