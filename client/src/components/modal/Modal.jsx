import React from "react";
import Employee from "../../../../server/models/Employee";

const Modal = ({ employee }) => {
  return (
    <div className="modal" role="dialog" id="my_modal_8">
      <div className="modal-box">
        <div className="flex flex-col items-center justify-center  ">
          <div className="p-3 px-20   bg-gray-300 rounded-md  bg-opacity-20 border border-gray-100">
            <h1 className="text-2xl font-semibold text-center text-gray-300">
              Create Employee
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3 m-3">
                <div className="avatar">
                  <div className="w-24 rounded ml-40">
                    <img src={imageUrl} alt={employee.image} />
                  </div>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <input
                      type="file"
                      className="file-input file-input-bordered w-full max-w-xs"
                      onChange={imageSubission}
                      onclick="this.value=null;"
                    />
                    <div className="label"></div>
                  </label>
                </div>
              </div>

              {/* //image sub */}
              <div className="flex gap-4 m-2">
                <div>
                  <input
                    type="text"
                    className="w-full input input-bordered h-10"
                    defaultValue={employee.name}
                    placeholder="Name"
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs({ ...inputs, name: e.target.value })
                    }
                  ></input>
                </div>
                {/* name */}
                <div>
                  <input
                    type="text"
                    className="w-full input input-bordered h-10"
                    placeholder="Email"
                    defaultValue={Employee.email}
                    value={inputs.email}
                    onChange={(e) =>
                      setInputs({ ...inputs, email: e.target.value })
                    }
                  ></input>
                </div>
                {/* email */}
              </div>

              <div className="flex gap-4 m-2">
                <div>
                  <input
                    type="text"
                    className="w-full input input-bordered h-10"
                    placeholder="Mobile"
                    defaultValue={employee.mobile}
                    value={inputs.mobile}
                    onChange={(e) =>
                      setInputs({ ...inputs, mobile: e.target.value })
                    }
                  ></input>
                </div>
                {/* mobile */}
                <div>
                  <select
                    onClick={(e) =>
                      setInputs({ ...inputs, designation: e.target.value })
                    }
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      choose designation
                    </option>
                    <option>HR</option>
                    <option>Manager</option>
                    <option>Sales</option>
                  </select>
                </div>
                {/* designation */}
              </div>

              <div className="flex gap-4 m-2">
                <CheckBox
                  handleCheckboxChange={handleCheckboxChange}
                  selectedGender={inputs.gender}
                />
                <div>
                  <label>
                    {" "}
                    <input
                      type="radio"
                      value="MCA"
                      name="radio-2"
                      className="radio "
                      onChange={(e) =>
                        setInputs({ ...inputs, course: e.target.value })
                      }
                    />
                    MCA
                  </label>
                  <label>
                    {" "}
                    <input
                      type="radio"
                      value="BCA"
                      name="radio-2"
                      className="radio "
                      onChange={(e) =>
                        setInputs({ ...inputs, course: e.target.value })
                      }
                    />
                    BCA
                  </label>
                  <label>
                    {" "}
                    <input
                      type="radio"
                      value="BSC"
                      name="radio-2"
                      className="radio "
                      onChange={(e) =>
                        setInputs({ ...inputs, course: e.target.value })
                      }
                    />
                    BSC
                  </label>
                </div>
                {/* course */}
              </div>

              <div>
                <button
                  className="btn btn-block btn-sm mt-2 items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Create"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
