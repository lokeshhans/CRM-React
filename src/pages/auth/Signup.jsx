import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { signup } from "../../Redux/Slices/AuthSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupDetails, setSignupDetails] = useState({
    email: "",
    password: "",
    name: "",
    userType: "",
    userStatus: "",
    clientName: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setSignupDetails({
      ...signupDetails,
      [name]: value,
    });
  }

  function handleUserType(e) {
    const userTypeSelected = e.target.textContent;
    setSignupDetails({
      ...signupDetails,
      userType: userTypeSelected,
      userStatus: userTypeSelected === "customer" ? "approved" : "suspended",
    });
    const dropdown = document.getElementById("userTypeDrodown");
    dropdown.open = !dropdown.open;
  }
  function resetSignupState() {
    setSignupDetails({
      email: "",
      password: "",
      name: "",
      userType: "",
      userStatus: "",
      clientName: "",
    });
  }
  async function onSubmit() {
    if (
      !signupDetails.name ||
      !signupDetails.email ||
      !signupDetails.password ||
      !signupDetails.clientName ||
      !signupDetails.userStatus ||
      !signupDetails.userType
    )
      return;
    console.log("calling login", signupDetails);
    const response =  await dispatch(signup(signupDetails));
    console.log(response);
    const signupSucessful = () => {
      // toast('signup sucessfull');
    }; 
    if (response.payload){  navigate("/login");
      signupSucessful();
    }
    
    else {
      resetSignupState();
      // toast.error('Something Went wrong! Please try Again...');
    }
  }

  return (
    <div className="flex  h-[90vh]">
      <div className="m-auto bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-5">Signup</h1>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            onChange={handleInputChange}
            value={signupDetails.name}
            name="name"
            placeholder="Username"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="email"
            onChange={handleInputChange}
            name="email"
            value={signupDetails.email}
            placeholder="Email"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="password"
            onChange={handleInputChange}
            name="password"
            value={signupDetails.password}
            placeholder="Password"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            onChange={handleInputChange}
            name="clientName"
            value={signupDetails.clientName}
            placeholder="Client Name"
            className="border border-gray-300 p-2 rounded"
          />
          <details className="dropdown pb-8" id="userTypeDrodown">
            <summary className="btn text-blue-50 flex w-full ">
              {!signupDetails.userType ? "User Type" : signupDetails.userType}
            </summary>
            <ul
              onClick={handleUserType}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-full mt-2 "
            >
              <li>
                <a>customer</a>
              </li>
              <li>
                <a>admin</a>
              </li>
              <li>
                <a>engineer</a>
              </li>
            </ul>
          </details>
          <button
            onClick={onSubmit}
            type="button"
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
          >
            Signup
          </button>
        </form>
        <p>
          already have an account login ? <Link to={"/login"}>login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
