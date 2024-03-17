import { Link } from "react-router-dom"

const ForgotEmail = () => {
  return (
    <div className="bg-gray-300 h-screen mx-auto flex justify-center items-center">
      <div className="w-[500px] h-96 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-7 px-8 rounded-xl">
        <h2 className=" font-bold text-3xl">Find your account</h2>
        <p className=" font-normal text-md my-3">Enter your email address</p>
        <input
          type="email"
          placeholder="Email address"
          className="w-full outline-none rounded-md py-3 px-4"
        />
        <p className=" font-normal text-md my-3 ">
          You may receive WhatsApp and SMS notifications from us for security
          and login purposes.
        </p>
        <div className=" justify-center flex my-5">
          <button className=" px-40 py-2 bg-blue-900 rounded-3xl text-white font-normal">
            Continue
          </button>
        </div>
        <h3 className=" justify-center flex font-medium font-xl"><Link to="/forgotnumber">Search by number instead</Link></h3>
      </div>
    </div>
  )
}

export default ForgotEmail