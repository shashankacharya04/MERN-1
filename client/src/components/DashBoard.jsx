import React from "react";

const DashBoard = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <div className="space-y-4">
        <p className="text-xl">
          Welcome to the Employee Management System. Here you can:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Create new employees</li>
          <li>Edit existing employees</li>
          <li>Delete employees</li>
          <li>
            If no image is uploaded, a default image based on the employee's
            gender will be assigned
          </li>
          <li>Sort employees by name, email, and date</li>
          <li>Search employees by name and email</li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
