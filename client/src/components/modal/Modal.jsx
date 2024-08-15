import React, { useEffect } from "react";
import Employee from "../../../../server/models/Employee";
import useHandleSendImg from "../../hooks/useHandleSendImg";
import handleInputError from "../../hooks/handleInputErrors";
import CheckBox from "../Checkbox";
import useEdit from "../../hooks/useEdit";
import { useState } from "react";
const Modal = ({ employee }) => {
  const [inputs, setInputs] = useState({
    image: "",
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: "",
  });
  const { edit, loading } = useEdit();
  const { handleSendImg, setImageUrl, imageUrl } = useHandleSendImg();
  function imageSubission(e) {
    handleSendImg(e);
  }
  useEffect(() => {
    setInputs({ ...inputs, image: imageUrl });
  }, [imageUrl]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("inputs", inputs);
    const val = handleInputError(inputs, "create");
    if (val) {
      edit(inputs, employee.id);
      setInputs({
        image: "",
        name: "",
        email: "",
        mobile: "",
        designation: "",
        gender: "",
        course: "",
      });
    }
  };
  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className="modal w-screen" role="dialog" id="my_modal_8">
      <div className="">
        <div className="modal-box">
          <div className="modal-action ">
            <a href="#" className="btn sborder-none text-red-600">
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center  ">
            <div className="p-3 px-20   bg-gray-300 rounded-md  bg-opacity-20 border border-gray-100">
              <h1 className="text-2xl font-semibold text-center text-gray-300">
                Edit Employee
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3 m-3">
                  <div className="avatar">
                    <div className="w-24 rounded ml-16">
                      {imageUrl ? (
                        <img src={imageUrl} />
                      ) : (
                        <img src={employee.image} />
                      )}
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
                      "Edit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
