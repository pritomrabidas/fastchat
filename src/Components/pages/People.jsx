import PeopleItem from "./PeopleItem";
import Title from "./Title";
const People = () => {
  return (
    <div className="container w-full bg-gray-300 ">
      <Title heading="People" />
      <PeopleItem/>
      <PeopleItem/>
      <PeopleItem/>
      <PeopleItem/>
    </div>
  );
};

export default People;
