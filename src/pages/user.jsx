import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";

const User = () => {
  return (
    <div className=" mx-auto">
      <div className="justify-center shadow-lg rounded-lg overflow-hidden my-20">
        <img
          className="w-full h-40 object-cover object-center"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        />
        <div className="flex items-center px-6 py-3 bg-gray-900">
          <svg
            className="h-6 w-6 text-white fill-current"
            viewBox="0 0 512 512"
          >
            <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
          </svg>
          <h1 className="mx-3 text-white font-semibold text-lg">Focusing</h1>
        </div>
        <div className="py-4 px-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Patterson johnson
          </h1>
          <div className="flex items-center mt-4 text-gray-700">
            <CiEdit/>
            <h1 className="px-2 text-sm">Bio</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <MdMarkEmailRead/>
            <h1 className="px-2 text-sm">Email</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <MdOutlineLocalPhone/>
            <h1 className="px-2 text-sm">Phone</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <FaLocationDot/>
            <h1 className="px-2 text-sm">Address</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
