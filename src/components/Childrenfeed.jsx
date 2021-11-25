import ChildInfo from "../utils/ChildInfo";

function Childrenfeed({ waitingLists }) {
  const shuffledWaitingLists = waitingLists.sort((a, b) => 0.5 - Math.random());

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto">
      {shuffledWaitingLists.slice(0, shuffledWaitingLists.length).map((child) => (
        <div className="" key={child.id}>
          <ChildInfo child={child} />
        </div>
      ))}
      {/* can add more appealing info here */}
      
    </div>
  );
}

export default Childrenfeed;
