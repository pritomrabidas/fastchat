import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {getAuth,createUserWithEmailAndPassword,sendEmailVerification,updateProfile,} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

const Register = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState("");
  let [usererror, setUsererror] = useState({
    fasterror: "",
    lasterror: "",
    emailerror: "",
    passworderror: "",
  });

  const handlesubmit = () => {
    if (firstName == "") {
      setUsererror({ fasterror: "Fast name is required" });
    } else if (lastName == "") {
      setUsererror({ lasterror: "last name is required" });
    } else if (email == "") {
      setUsererror({ emailerror: "Email is required" });
    } else if (password == "") {
      setUsererror({ passworderror: "Password is required" });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser);
          updateProfile(auth.currentUser, {
            displayName: firstName,
            photoURL: "",
          }).then(()=>{
            toast.success(
              "🦄 Registration successful , Please confirm your verification",
              {
                position: "top-center",
                autoClose: 5000,
                closeOnClick: true,
                theme: "light",
              }
            );
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setUsererror("");
            setTimeout(() => {
              navigate("/signin");
            }, 5000);
          })
          
        })
        .catch((error) => {
          if (error.code.includes("auth/invalid-email")) {
            setUsererror({ emailerror: "Invaild email" });
          }
          if (error.code.includes("auth/email-already-in-use")) {
            setUsererror({
              emailerror: "Email already use Please try another email",
            });
          }
          if (error.code.includes("auth/weak-password")) {
            setUsererror({
              passworderror: "Password should be at least 6 characters",
            });
          }
        });
    }
  };

  return (
    <div className="flex py-4 bg-gray-300">
      <div className=" w-1/2 ">
        <div className=" ml-32 mt-48">
          <img src="logo.png" alt="logo" />
          <h2 className=" font-bold text-3xl">
            Get started with easily register
          </h2>
          <p className="font-semibold text-xl">
            Free register and you can enjoy it.
          </p>
        </div>
      </div>
      <div className=" w-1/2 ">
        <ToastContainer />
        <div className="form-container">
          <p className="title">Sign up</p>
          <div className="form">
            <div className="flex w-fit">
              <div className="">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="input mr-4"
                  placeholder="Fast Name"
                />
                {usererror.fasterror && (
                  <p className=" font-extralight text-base text-red-800">
                    {usererror.fasterror}
                  </p>
                )}
              </div>
              <div>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="input"
                  placeholder="Last Name"
                />
                {usererror.lasterror && (
                  <p className=" font-extralight text-base text-red-800">
                    {usererror.lasterror}
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="input w-[440px]"
                placeholder="Email"
              />
              {usererror.emailerror && (
                <p className=" font-extralight text-base text-red-800">
                  {usererror.emailerror}
                </p>
              )}
            </div>
            <div>
            <div className="flex items-center justify-end relative">
              <div className="">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPass ? "text" : "Password"}
                className="input w-[440px]"
                placeholder="Password"
              />
              </div>
              <div onClick={()=>setShowPass(!showPass)}
              className="absolute mr-2 cursor-pointer">
                {showPass ? <FaEye/> : <FaEyeSlash/>}
              </div>
            </div>
              {usererror.passworderror && (
                <p className=" font-extralight text-base text-red-800">
                  {usererror.passworderror}
                </p>
              )}
            </div>
            <p className="page-link">
              <span className="page-link-label">
                <Link to="/forgotnumber">Forgot Password?</Link>
              </span>
            </p>
            <button onClick={handlesubmit} className="form-btn">
              Sign up
            </button>
          </div>
          <p className="sign-up-label">
            Don't have an account?
            <span className="sign-up-link">
              <Link to="/signin">Sign In</Link>
            </span>
          </p>
          <div className="buttons-container">
            <div className="apple-login-button">
              <svg
                stroke="currentColor"
                fill="currentColor"
                // stroke-width="0"
                className="apple-icon"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
              </svg>
              <span>Log in with Apple</span>
            </div>
            <div className="google-login-button">
              <svg
                stroke="currentColor"
                fill="currentColor"
                // stroke-width="0"
                version="1.1"
                x="0px"
                y="0px"
                className="google-icon"
                viewBox="0 0 48 48"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <span>Log in with Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
