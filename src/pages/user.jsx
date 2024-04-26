import { CiEdit } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state)=> state.userSlice.user)
  return (
    <div className=" mx-auto w-80">
      <div className="justify-center shadow-xl rounded-lg overflow-hidden my-20">
        <img
          className="w-full h-56  object-cover object-center"
          src="pritom101.jpg"
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
            <h1 className="px-2 text-sm">{user.email}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
