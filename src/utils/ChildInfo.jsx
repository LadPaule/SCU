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
        <p className="line-clamp-2 my-2 text-sm">{child.childStory}</p>

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
                  <p>{child.childStory}</p>
                  <p className="mt-4 text-scu_blue-light font-bold text-lg">
                    You can support {child.name} with a monthly sponsorship of
                    £.35 equivalent to $.50 equivalent to €40 or locally ugx.165000
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
                  <Link href="/sponsor" passHref>
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


export function Sponsor(){
  return (
    <div className="">
      <Head>
        <title>
          Smile Charity Uganda (SCU) - A helping Hand to Those in Need
        </title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.webp"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="32x32"
          href="/favicon-32x32.webp"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="16x16"
          href="/favicon-16x16.webp"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta
          name="description"
          content="Smile Charity uganda (SCU) is a christian non profit oganisation. We 
          are a Hand up, not a hand out. SCU operates on a defined Working Mechanism, DESC that is, Discipleship and Evangelism,
          Education Support, Skilling and Crisis care and Management"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta author="Smile Charity Uganda Media department" />
        <meta
          name="keywords"
          content="Smile Charity, Smile Charity Uganda, SCU, Charity, NGO, Uganda, Christian Charity, Kampala charity, Sponsor a child"
        />
      </Head>
      {/* header */}
      <Header />
      <Navbar />

      <div className="flex flex-col justify-center items-center">
        <form action="" method="post">
          <div className="">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" />
          </div>
          <div className="">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div className="">
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="">
            <label htmlFor="postalAddress">Postal Address</label>
            <input type="text" name="postalAddress" id="postalAddress" />
          </div>
          <div className="">
            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="country" />
          </div>
          <div className="">
            <label htmlFor="type">
              <select name="type" id="type">
                <option value="oneTime">One time Support</option>
                <option value="monthly">Monthly Support</option>
              </select>
            </label>
          </div>
          <div className="button">
            <button className="">back</button>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="button"
            >
              commit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}