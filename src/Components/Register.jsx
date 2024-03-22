import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  let [firstName,setFirstName] = useState("") 
  let [lastName,setLastName] = useState("") 
  let [email,setEmail] = useState("pritjnkjnom@gmail.com") 
  let [password,setPassword] = useState("5644555454") 
  const auth = getAuth();

  const handlesubmit = ()=>{

    createUserWithEmailAndPassword(auth, email, password).then(()=>{
      console.log('singin successfull');
    })
    .catch((error)=>{
      console.log(error.code);
    })
  }



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
        <div className="form-container">
          <p  className="title">Sign up</p>
          <div className="form">
            <div className="flex w-fit">
              <input type="text" className="input mr-4" placeholder="Fast Name" />
              <input type="text" className="input" placeholder="Last Name" />
            </div>
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
            <p className="page-link">
              <span className="page-link-label"><Link to="/forgotnumber">Forgot Password?</Link></span>
            </p>
            <button onClick={handlesubmit} className="form-btn">Sign up</button>
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
              >
               
              </svg>
              <span>Log in with Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
