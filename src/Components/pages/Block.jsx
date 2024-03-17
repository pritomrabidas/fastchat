import BlockItem from "./BlockItem";
import Title from "./Title";
const BlockList = () => {
  return (
    <div className="container w-full bg-gray-300">
      <Title heading="Blocks" />
      <BlockItem/>
      <BlockItem/>
      <BlockItem/>
      <BlockItem/>
      <BlockItem/>
    </div>
  )
}

export default BlockList