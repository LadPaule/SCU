import Image from "next/image";
import { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

function ChildInfo({ child }) {
  let [isOpen, setIsOpen] = useState(false);
  let completeButton = useRef(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div
        className="relative flex-col m-5 bg-white z-20 p-10
      transition duration-500 ease-in-out transform hover:-translate-y-1"
      >
        {child.photograph.length > 0 && (
          <Image
            src={child.photograph[0].url}
            className="rounded-md items-center justify-center cursor-pointer"
            alt={child.name}
            width={200}
            height={200}
            objectFit="contain"
            loading="lazy"
          />
        )}
        <h1 className="cursor-pointer ">{child.name}</h1>
        <p className="cursor-pointer">Child date of Birth</p>
        <p className="line-clamp-2 my-2 text-sm">{child.childStory.text}</p>

        <button
          onClick={openModal}
          type="button"
          className="px-4 py-2 text-sm font-medium text-scu_blue-light bg-scu_blue-light 
            rounded-md bg-opacity-20 hover:bg-opacity-70 hover:text-yellow-500  hover:font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50 "
        >
          more info
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
          initialFocus={completeButton}
        >
          <div className="px-4 text-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all
                transform bg-white shadow-xl rounded-2xl"
              >
                <Dialog.Title
                  as="h1"
                  className="text-lg font-bold leading-6 text-scu_blue-light"
                >
                  You have selected {child.name}
                </Dialog.Title>
                <div className="mt-2 flex">
                  {child.photograph.length > 0 && (
                    <Image
                      src={child.photograph[0].url}
                      className="rounded-md items-center justify-center cursor-pointer"
                      alt={child.name}
                      width={200}
                      height={200}
                      objectFit="contain"
                      loading="lazy"
                    />
                  )}
                  <div className="space-y-8">
                    <p className="text-black font-bold">child date of birth</p>
                    <p className="text-black font-bold">
                      Stays at: {child.areaOfResidence}
                    </p>
                  </div>
                </div>
                <div className="">
                  <p>{child.childStory.text}</p>
                  <p className="mt-4 text-scu_blue-light font-bold text-lg">
                    You can support {child.name} with a monthly sponsorship of
                    £.30 equivalent to $. 40 or locally ugx.150000
                  </p>
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    type="button"
                    className="rounded-sm bg-scu_blue-light hover:opacity-90 text-scu_yellow p-4 "
                    onClick={closeModal}
                  >
                    Got it
                  </button>
                  <Link href="/sponsor">
                    <button onClick="/sponsor" type="button" className="button animate-bounce ">
                      support
                    </button>
                  </Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ChildInfo;
