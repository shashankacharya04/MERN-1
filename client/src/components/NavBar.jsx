import React from "react";
import useLogout from "../hooks/useLogout";
import { Link } from "react-router-dom";
const NavBar = () => {
  const { logout } = useLogout();
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        <Link to="/dashboard" className="btn btn-ghost text-xl">
          DASHBOARD
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/dashboard/createemployee">Create Employee</Link>
          </li>
          <li>
            <Link to="/dashboard/employeelist">Employee List</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="btn  btn-outline btn-secondary "
          onClick={() => logout()}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
