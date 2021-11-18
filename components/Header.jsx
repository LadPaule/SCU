import Image from 'next/image';
import { MenuIcon } from '@heroicons/react/solid'
import { helperdata } from "../helperdata";
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-scu_blue-light">
      {/* secondary Menu */}
      <div className="flex items-center flex-col sm:flex-grow justify-between lg:flex-row">
        <div className="mb-4 mt-2">  
          <Link href="/" passHref>
            <Image className="object-contain sm:p-8 cursor-pointer p-5 ml-4" src="/sculogo.svg" alt="logo" width={180} height={70}/>
          </Link>
        </div>
        <div className="flex justify-evenly space-x-8 max-w-lg flex-grow mb-2 px-10">
          <div className="items-center">
            <MenuIcon className="text-scu_yellow h-8 mb-2 hover:text-white lg:hidden"/>
          </div>
          <div className=" flex space-x-6">
            <Link href="#" passHref>
              <a href="mailto:info@smilecharityuganda.org" target="_blank" rel="noreferrer">
              <svg className="fill-current cursor-pointer text-scu_yellow hover:scale-105 hover:animate-bounce" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
              </a>
            </Link>
            <a href="#" target="_blank" rel="noreferrer"><svg  className="fill-current cursor-pointer text-scu_yellow  hover:scale-105 hover:animate-bounce"xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg></a>
            <a href="#" target="_blank" rel="noreferrer"><svg className="fill-current cursor-pointer text-scu_yellow  hover:scale-105 hover:animate-bounce" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg></a>
          </div>
          <div className="flex space-x-4">
            <Link href="/news" passHref>
              <span className="text-md font-semibold text-scu_yellow 
                hover:text-white hover:scale-105 cursor-pointer">News
               </span>
            </Link>

            <Link href="/chat/forum" passHref>
              <span className="text-md font-semibold text-scu_yellow 
              hover:text-white hover:scale-105 cursor-pointer">Forum</span>
            </Link>

          </div>

          <div className="pr-10 cursor-pointer">
            <button href="#" className="button text-black 
              font-semibold animate-pulse lg:m10 p4-4">Donate
            </button>
          </div>
        </div>          
      </div>
      
      
      {/* Primary Menu */}
      <nav className="bg-scu_blue hidden lg:flex">
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

    </header>
  )
}

export default Header
