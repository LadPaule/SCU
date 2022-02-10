import { helperdata } from "../helperdata";
import Link from "next/link";
import Aos from "aos";
import { useEffect } from "react";

function Navbar() {

  return (
      <nav  className="bg-scu_blue hidden lg:flex">
        <div className="justify-evenly flex-grow">
          <ul className="flex whitespace-nowrap ml-4 items-center justify-evenly flex-grow">
            {
              helperdata.map((item, index)=>{
                return(
                  <li key={index} className="hover:scale-105 hover:border-b-2 border-scu_blue flex-row cursor-pointer p-1 pr-2 rounded-md
                   active:text-red-500 hover:text-bold">
                    <Link href={item.path}>
                      <a href={item.path} className="flex space-x-2">
                        <span className="text-lg font-bold text-white">{item.title}</span>
                      </a>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
  )
}

export default Navbar
