import {
  EmojiHappyIcon,
  EyeOffIcon,
  HomeIcon,
  MailOpenIcon,
  PhoneIncomingIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";
import {
  HandIcon,
  AdjustmentsIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending");
    setSubmitted(!submitted);
    let data = {
      email: email,
    };
    fetch("/api/subscribe", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true);
        setEmail("");
      }
    });
  };

  return (
    <footer>
      <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h1 className="text-xl pb-4">SCU Address</h1>
              <div className="text-gray-400">
                P.O.Box 5895 ,<br />
                Kampala, Uganda <br />
                <br />
                <p className="flex">
                  <strong>
                    <PhoneIncomingIcon className="text-scu_yellow h-5 mr-2 hover:scale-x-110" />{" "}
                  </strong>{" "}
                  +256 752 101 007
                </p>{" "}
                <br />
                <p className="flex">
                  <strong>
                    <MailOpenIcon className="text-scu_yellow h-5 mr-2 hover:scale-x-110" />{" "}
                  </strong>{" "}
                  info@smilecharityuganda.org
                </p>{" "}
                <br />
              </div>
            </div>
            <div className="mb-5">
              <h1 className="pb-4 text-xl">Useful Links</h1>
              <ul className="text-gray-400">
                <li className="pb-4 flex hover:font-bold hover:text-scu_yellow">
                  <HomeIcon className="h-5 mr-2" />
                  <Link href="/">
                    <a className="hover:text-scu_yellow mr-2">Home </a>
                  </Link>
                </li>
                <li className="pb-4 flex hover:font-bold hover:text-scu_yellow">
                  <EmojiHappyIcon className=" h-5 mr-2" />
                  <Link href="/about">
                    <a className="hover:text-scu_yellow">About us </a>
                  </Link>
                </li>
                <li className="pb-4 flex hover:font-bold hover:text-scu_yellow">
                  <EyeOffIcon className=" h-5 mr-2" />
                  <Link href="/privacy-policy">
                    <a className="hover:text-scu_yellow">Privacy Policy </a>
                  </Link>
                </li>
                <li className="pb-4 flex hover:font-bold hover:text-scu_yellow">
                  <DocumentTextIcon className="h-5 mr-2" />
                  <Link href="/terms">
                    <a className="hover:text-scu_yellow">Terms of Service </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h1 className="pb-4 text-xl">Our Domains</h1>
              <ul className="text-gray-400">
                <li className="pb-4 flex hover:font-bold hover:text-scu_yellow">
                  <UserGroupIcon className="h-5 mr-2" />
                  <Link href="/discipleship">
                    <a>Discipleship</a>
                  </Link>
                </li>
                <li className="pb-4 flex hover:font-bold hover:text-scu_yellow">
                  <AcademicCapIcon className="h-5 mr-2" />
                  <Link href="/education">
                    <a>Education Support</a>
                  </Link>
                </li>
                <li className="pb-4 flex hover:font-bold hover:text-scu_yellow">
                  <AdjustmentsIcon className="h-5 mr-2" />
                  <Link href="/skills">
                    <a>Skilling</a>
                  </Link>
                </li>
                <li className="pb-4 flex hover:font-bold hover:text-scu_yellow">
                  <HandIcon className="h-5 mr-2" />
                  <Link href="/crisis-care">
                    <a>Crisis Care</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h1 className="pb-4 text-xl">Join Our Newsletter</h1>
              <p className="text-gray-400 pb-2">
               sign up to join many other people and never miss our Newsletters and other Publications
              </p>
              <form className="flex flex-row flex-wrap" action="">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  name="email"
                  className="text-gray-400 w-2/3 p-2 focus:outline-none border-yellow-500"
                  placeholder="you@domain.com"
                />
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  className="p-2 w-1/3 bg-yellow-500 text-white font-semibold hover:text-black"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 text-gray-500 px-10">
        <div className="">
          <div className="text-center">
            <div className="animate-pulse text-scu_yellow">
              copyright{" "}
              <strong>
                <span className="">Smile Charity Uganda (SCU)</span>
              </strong>{" "}
              All rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
