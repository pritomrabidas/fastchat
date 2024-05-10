import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {getAuth,createUserWithEmailAndPassword,sendEmailVerification,updateProfile,} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

const Register = () => {
  // let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
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
    // if (re.test(password)) {
    //   console.log(true);
    // }else{
    //   console.log(false);
    // }
    if (firstName == "") {
      setUsererror({ fasterror: "Fast name is required" });
    } else if (lastName == "") {
      setUsererror({ lasterror: "last name is required" });
    } else if (email == "") {
      setUsererror({ emailerror: "Email is required" });
    } else if (password == "") {
      setUsererror({ passworderror: "Password is required" });
    // } else if (re.test(password)) {
    //   setUsererror({ passworderror: "Enter a strong password" });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser);
          updateProfile(auth.currentUser, {
            displayName: firstName + " " + lastName,
            photoURL: " ",
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
    <div className="flex py-4 bg-gray-300 h-screen pt-24" >
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
        <div className="form-container w-[500px] ">
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
            do not have an account?
            <span className="sign-up-link">
              <Link to="/signin">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
