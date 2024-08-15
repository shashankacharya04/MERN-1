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
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="card w-96 bg-gray-800 shadow-xl p-6 rounded-lg">
        <h1 className="text-2xl text-center text-white font-bold mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full bg-gray-700 text-white"
              onChange={(e) => setAdmin({ ...admin, username: e.target.value })}
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-gray-700 text-white"
              onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className={`btn btn-outline btn-primary w-full ${
              loading ? "loading" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
