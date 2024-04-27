const PeopleItem = ({userData}) => {
  return (
    <div className=" mx-6 mb-2 items-center flex">
      <img
        src={userData.profile_picture}
        alt="pritom"
        className=" w-10 h-10 rounded-full mr-5"
      />
      <p className=" font-medium text-2xl font-sans">{userData.username}</p>
      <button className="mx-auto flex text-2xl mr-1 font-sans">Add Request</button>
    </div>
  );
};

export default PeopleItem;
