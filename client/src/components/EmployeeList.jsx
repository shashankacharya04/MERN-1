import React, { useEffect, useState } from "react";
import useGetEmp from "../hooks/useGetEmp";
import useDelete from "../hooks/useDelete";
import toast from "react-hot-toast";
import Modal from "./modal/Modal";
const EmployeeList = () => {
  const { empDelete } = useDelete();
  const { emps: initialEmp } = useGetEmp();
  const [employees, setEmployees] = useState(initialEmp);
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setEmployees(initialEmp);
  }, [initialEmp]);
  useEffect(() => {
    console.log("seleted emps are", selectedEmp);
  }, [selectedEmp]);
  const deleteeployee = (id) => {
    empDelete(id);
    setEmployees(employees.filter((emp) => emp.id != id));
  };
  const sort = (type) => {
    let sortedVal;
    if (type == "name") {
      sortedVal = employees.sort((a, b) => a.name.localeCompare(b.name));
      setEmployees([...sortedVal]);
    }
    if ((type = "email")) {
      sortedVal = employees.sort((a, b) => a.email.localeCompare(b.email));
      setEmployees([...sortedVal]);
    }
    // if ((type = "date")) {
    //   sortedVal = employees.sort((a, b) => {
    //     const adate = JSON.stringify(a.date);
    //     const bdate = JSON.stringify(b.date);

    //     adate.localeCompare(bdate);
    //   });
    //   setEmployees([...sortedVal]);
    // }
  };
  //searching logics
  const searchSubmit = (e) => {
    e.preventDefault();
    const found = employees.find((emp) => emp.name == search);
    if (found) setEmployees([found]);
    else toast.error("not found");
  }; //issue with this code

  return (
    <div className="overflow-x-auto">
      <div className="dropdown dropdown-right">
        <div tabIndex={0} role="button" className="btn m-1">
          sortby
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a onClick={() => sort("name")}>Name</a>
          </li>
          <li>
            <a onClick={() => sort("email")}>Email id</a>
          </li>
          <li>
            <a onClick={() => sort("date")}>Date</a>
          </li>
        </ul>
      </div>
      {/* search input */}
      <form className="m-3" onSubmit={searchSubmit}>
        <input
          type="text"
          placeholder="Search.."
          className="input input-primary"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn">search</button>
        <span className="ml-10 font-mono">
          Total Employees :{employees.length}{" "}
        </span>
      </form>
      <table className="table border border-gray-600">
        <thead>
          <tr className="text-purple-600">
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>gender</th>
            <th>Course</th>
            <th>Create date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {employees.map((empoly) => (
            <tr key={empoly._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={empoly.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{empoly.name}</td>
              <td>{empoly.email}</td>
              <td>{empoly.mobile}</td>
              <td>{empoly.designation}</td>
              <td>{empoly.gender}</td>
              <td>{empoly.course}</td>
              <td>{empoly.createdAt.substring(0, 10)}</td>
              <td className="flex gap-2">
                <a
                  href="#my_modal_8"
                  className="btn"
                  onClick={() => setSelectedEmp(empoly)}
                >
                  {" "}
                  Edit
                </a>
                <button onClick={() => deleteeployee(empoly.id)}>delete</button>
              </td>
            </tr>
          ))}

          {/* row 2 */}
        </tbody>
        {/* foot */}
        {/* <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot> */}
      </table>
      {selectedEmp && <Modal employee={selectedEmp} />}
    </div>
  );
};

export default EmployeeList;
