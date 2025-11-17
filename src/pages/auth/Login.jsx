import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../Redux/Slices/AuthSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  }
  function resetLoginState() {
    setLoginDetails({
      email: "",
      password: "",
    });
  }
  async function onSubmit() {
    
    if (!loginDetails.email || !loginDetails.password) return;
    console.log("calling login", loginDetails);
    const response = await dispatch(login(loginDetails));
    if (response.payload) navigate("/");
    else resetLoginState();
  }

  return (
    <div className="flex  h-[90vh]  ">
      <div className="m-auto bg-white  p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-5">Login</h1>
        <div className="flex flex-col gap-5">
          <input
            onChange={handleInputChange}
            name="email"
            type="text"
            placeholder="Username"
            value={loginDetails.email}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            onChange={handleInputChange}
            name="password"
            type="password"
            placeholder="Password"
            value={loginDetails.password}
            className="border border-gray-300 p-2 rounded"
          />
          <button
            type="button"
            onClick={onSubmit}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
        <p>haven't an account signup ? <Link to={"/signup"}>signup</Link></p>

      </div>
    </div>
  );
}

export default Login;
