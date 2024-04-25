import { CiEdit } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state)=> state.userSlice.user)
  return (

    <div className=" mx-auto w-72">
      <div className="justify-center shadow-lg rounded-lg overflow-hidden my-20">
        <img
          className="w-full h-40  object-cover object-center"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        />
        <div className="flex items-center px-6 py-3 bg-gray-900">
          <h1 className="mx-3 text-white font-semibold text-lg">{user.displayName}</h1>
        </div>
        <div className="py-4 px-6">
          <div className="flex items-center mt-4 text-gray-700">
            <CiEdit/>
            <h1 className="px-2 text-sm">Bio</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <MdMarkEmailRead/>
            <h1 className="px-2 text-sm">Email</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
