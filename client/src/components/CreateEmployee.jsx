import React, { useEffect, useState } from "react";
import CheckBox from "./Checkbox";
import useHandleSendImg from "../hooks/useHandleSendImg";
import useCreateEmployee from "../hooks/useCreateEmployee";
import handleInputError from "../hooks/handleInputErrors";
const CreateEmployee = () => {
  const [inputs, setInputs] = useState({
    image: "",
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: "",
  });
  const { createEmp, loading } = useCreateEmployee();
  const { handleSendImg, setImageUrl, imageUrl } = useHandleSendImg();
  function imageSubission(e) {
    handleSendImg(e);
    console.log("image url", imageUrl);
  }
  useEffect(() => {
    setInputs({ ...inputs, image: imageUrl });
  }, [imageUrl]);
  console.log("image insdie iseEffect", inputs);
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("inputs", inputs);
    const val = handleInputError(inputs, "create");
    if (val) {
      createEmp(inputs);
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
    <div className="flex flex-col items-center justify-center  ">
      <div className="p-3 px-20   bg-gray-300 rounded-md  bg-opacity-20 border border-gray-100 ">
        <h1 className="text-2xl font-semibold text-center text-gray-300">
          Create Employee
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 m-3">
            {imageUrl && (
              <div className="avatar">
                <div className="w-24 rounded-full ml-40">
                  <img src={imageUrl} />
                </div>
              </div>
            )}

            <div>
              <label className="form-control w-full max-w-xs">
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                  onChange={imageSubission}
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
                placeholder="name"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              ></input>
            </div>
            {/* name */}
            <div>
              <input
                type="text"
                className="w-full input input-bordered h-10"
                placeholder="Email"
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
              <label className="">Add Mobile Number</label>
              <input
                type="text"
                className="w-full input input-bordered h-10"
                placeholder="Mobile Number "
                value={inputs.mobile}
                onChange={(e) =>
                  setInputs({ ...inputs, mobile: e.target.value })
                }
              ></input>
            </div>
            {/* mobile */}
            <div>
              <label className="">Add designation</label>
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
            <div className="flex flex-col">
              <label>Select gender </label>
              <CheckBox
                handleCheckboxChange={handleCheckboxChange}
                selectedGender={inputs.gender}
              />
            </div>

            <div className="mt-1 ml-4">
              <label>Choose course</label>
              <br />
              <label>
                {" "}
                <input
                  type="radio"
                  value="MCA"
                  name="radio-2"
                  className="radio  "
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
  );
};

export default CreateEmployee;
