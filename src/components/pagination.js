import React from 'react';
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);

  }
  return ( 
    <nav className='flex text-center'>
      {
        pageNumbers.map(number =>(
          <li key={number}>
            <button className='cursor-pointer' onClick={()=>paginate(number)}>{number}</button>
          </li>
        ))
      }
    </nav>
   );
}
 
export default Pagination;