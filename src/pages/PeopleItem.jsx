const PeopleItem = ({userData}) => {
  console.log(userData);
  return (
    <div className=" mx-6 mb-2 items-center flex">
      <img
        src="pritom101.jpg"
        alt="pritom"
        className=" w-16 h-16 rounded-full mr-5"
      />
      <p className=" font-medium text-2xl font-sans">{userData.username}</p>
      <button className="mx-auto flex text-2xl mr-1 font-sans">Add Request</button>
    </div>
  );
};

export default PeopleItem;
