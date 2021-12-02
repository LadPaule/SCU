import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

function crisisCare() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Crisis Care & Management</title>
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

      <main className="m-0 p-0">
        {/* banner */}
        <div className="relative">
          <Image
            className="w-full mix-blend-overlay h-full"
            src="/education/education.webp"
            width={1440}
            height={560}
            objectFit="contain"
            loading="eager"
            alt="crisis care banner"
          />
          <div className="absolute -mt-44 px-10">
            <h1 className="font-black text-3xl md:text-6xl whitespace-nowrap text-scu_blue-light mb-2">
              Education Support
            </h1>
            <p className="hidden lg:block text-scu_blue-light text-xl text-left px-2 font-bold">
              Participate and be a part of our ever growing team by supporting
              our programs through visiting us here on the ground, volunteering
              with our programs of your choice.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 mx-auto md:-mt-40">
          <div
            className="group bg-white cursor-pointer flex flex-col m-5 z-30 p-5 transition
        duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <h1 className=" top-2 right-2 text-blue-600 font-black text-2xl">
              Who we are?
            </h1>
            <p>
              Smile charity Uganda we are a helping hand to those in need. We
              are a hand up not a hand hand out. We envision holistically
              empowered and transformed lives through our working mechanism DESC
              which stands for Discipleship and Evangelism, Education Support,
              Skilling and Crisis management.
            </p>
            <Link href="/about">
              <button className="mr-56 mt-4 button w-200 hover:animate-bounce">
                learn more
              </button>
            </Link>
          </div>

          <div
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

          <div
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

        {/* feed */}
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default crisisCare;
