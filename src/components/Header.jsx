import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, Fragmet, useEffect, useRef, useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { sidebarData } from "../helperdata";
function Header() {
  return (
    <header className="sticky top-0 z-50 flex bg-scu_blue-light flex-col sm:flex-row justify-between items-center  h-auto">
      <div className="m-4">
        <Link href="/">
        <Image
        href="/"
          className="object-contain"
          src="/sculogo.svg"
          alt="logo"
          width={180}
          height={70}
        />
        </Link>
      </div>

      <div className="flex flex-grow justify-evenly last:ml-2 max-w-md space-x-4 items-center">
        <Menu
          as="div"
          className="lg:hidden inline-block text-left items-center"
        >
          <div className="">
            <Menu.Button>
              <MenuIcon className="text-scu_yellow h-8 hover:scale-105 hover:animate-bounce hover:text-white" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute overflow-y-scroll noscrollbar ring-0 w-80 sm:mt-0 md:mt-8 h-screen left-0 origin-top-right bg-scu_blue-light divide-y divide-scu_yellow shadow-lg ring-black ring-opacity-5 focus:outline-none">
              <div className="p-1 ">
                <Menu.Item as="div">
                  {({ active }) =>
                    sidebarData.map((item) => (
                      <button
                        aria-label="menu"
                        key={item.path}
                        className="flex text-white rounded-md last:mb-2 items-center space-y-1 w-full p-4 hover:text-lg hover:font-bold hover:text-scu_yellow hover:bg-scu_blue"
                      >
                        {item.icon}
                        <Link href={item.path}>{item.title}</Link>
                      </button>
                    ))
                  }
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Link
          href="https://www.instagram.com/p/CV4wzcEMgKV/?utm_medium=copy_link"
          passHref={true}
        >
          <a
            href="https://www.instagram.com/p/CV4wzcEMgKV/?utm_medium=copy_link"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current cursor-pointer text-scu_yellow  hover:scale-105 hover:animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
            </svg>
          </a>
        </Link>

        <Link
          href="https://www.facebook.com/smilecharityuganda"
          passHref={true}
        >
          <a
            href="https://www.facebook.com/smilecharityuganda"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current cursor-pointer text-scu_yellow  hover:scale-105 hover:animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
            </svg>
          </a>
        </Link>

        <Link href="/news" passHref>
          <span
            className="text-md font-semibold text-scu_yellow 
            hover:text-white hover:scale-105 cursor-pointer"
          >
            News
          </span>
        </Link>

        <Link href="/chat/forum" passHref>
          <span
            className="text-md font-semibold text-scu_yellow 
          hover:text-white hover:scale-105 cursor-pointer"
          >
            Forum
          </span>
        </Link>
        <Link
          href="https://www.stewardship.org.uk/partners/20217424"
          passHref={true}
        >
          <a
            href="https://www.stewardship.org.uk/partners/20217424"
            target="_blank"
            rel="noreferrer"
          >
            <button
              href="https://www.stewardship.org.uk/partners/20217424"
              className="button text-black 
          font-semibold animate-pulse"
            >
              Donate
            </button>
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
