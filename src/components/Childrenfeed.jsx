import ChildInfo from "../utils/ChildInfo";
import React, { useState, useEffect } from "react";
import Pagination from "./pagination";

function Childrenfeed({ waitingLists }) {
  const [loading, setLoading] = useState(false);
  const [children, setChildren] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const shuffledChildrenList = waitingLists.sort(() => 0.5 - Math.random());
  console.log(shuffledChildrenList);
  useEffect(() => {
    setLoading(true);
    setChildren(shuffledChildrenList);
    setLoading(false);
  }),
    [waitingLists];

  // todo: getIndexOfLastPost
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = shuffledChildrenList.slice(indexOfFirstPost, indexOfLastPost);

  // Todo: handle pagination functionality
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="">
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto">
        {currentPosts.map((child) => (
          <div className="" key={child.id}>
            <ChildInfo child={child} />
          </div>
        ))}
        {/* can add more appealing info here */}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={children.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Childrenfeed;
