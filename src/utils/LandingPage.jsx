import Link from "next/link";
import Aos from "aos";
import { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[]);
  return (
    <div>
      <div data-aos="fade-up" className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 mx-auto -mt-6">
        <div data-aos="flip-left"
          className="group bg-white cursor-pointer flex flex-col m-5 z-30 p-5 transition
        duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <h1 className=" top-2 right-2 text-blue-600 font-black text-2xl">
            Who we are?
          </h1>
          <p>
            Smile charity Uganda we are a helping hand to those in need. We are
            a hand up not a hand hand out. We envision holistically empowered
            and transformed lives through our working mechanism DESC which
            stands for Discipleship and Evangelism, Education Support, Skilling
            and Crisis management.
          </p>
          <Link href="/about">
            <button className="mr-56 mt-4 button w-200 hover:animate-bounce">
              learn more
            </button>
          </Link>
        </div>

        <div data-aos="flip-left"
          className="group bg-white cursor-pointer flex flex-col m-5 z-30 p-5 transition
        duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <h1 className="font-black text-blue-600 text-2xl ">What we do.</h1>
          <p>
            We reach out to those in need of a helping hand through our
            different programs including;
          </p>
          <ul className="m-4 mr-8">
            <Link href="/discipleship">
              <li className="font-bold text-xl text-blue-600 hover:text-scu_blue-light hover:underline">
                Discipleship & Evangelism
              </li>
            </Link>
            <Link href="/education">
              <li className="font-bold text-xl text-blue-600 hover:text-scu_blue-light hover:underline">
                Education Support
              </li>
            </Link>
            <Link href="/skills">
              <li className="font-bold text-xl text-blue-600 hover:text-scu_blue-light hover:underline">
                Skilling
              </li>
            </Link>
            <Link href="/crisis-care">
              <li className="font-bold text-xl text-blue-600 hover:text-scu_blue-light hover:underline">
                Crisis care & Management
              </li>
            </Link>
          </ul>
        </div>

        <div data-aos="flip-left"
          className="group bg-white cursor-pointer flex flex-col m-5 z-30 p-5 transition
        duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <h1 className="font-black text-blue-600 text-2xl">
            How to get involved?
          </h1>
          <p>
            You too can be part of this work through praying with us, Visiting
            us, or donating to us.
          </p>

          <Link href="/participate">
            <button className="mr-56 mt-4 button hover:animate-bounce">
              learn how
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
