import React from "react";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="flex text-center place-content-center">
      {pageNumbers.map((number) => (
        <li className="list-none text-center text-white text-xl font-bold items-center" key={number}>
          <button
            className="cursor-pointer bg-scu_blue  p-2 "
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
