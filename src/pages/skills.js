import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

function skilling() {
  return (
    <div className="bg-gray-400">
      <Head>
        <title>Skills Developement</title>
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
            src="/skilling/skill.webp"
            width={1440}
            height={560}
            objectFit="contain"
            loading="eager"
          />
          <div className="absolute -mt-44 px-10">
            <h1 className="font-black text-3xl md:text-6xl whitespace-nowrap text-scu_blue-light mb-2">
              Skills Development
            </h1>
            <p className="hidden lg:block text-scu_blue-light text-xl text-left px-2 font-bold">
              Participate and be a part of our ever growing team by supporting
              our programs through visiting us here on the ground, volunteering
              with our programs of your choice.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 mx-2 md:-mt-5">
          <div
            className="group bg-white cursor-pointer flex flex-col m-5 z-30 p-5 transition
        duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <h1 className=" top-2 right-2 text-blue-600 font-black text-2xl">
              Women Empowerment
            </h1>
            <p>
              A holistic child developement approach where an able person picks
              on a child in need of a helping hand to start or keep up with
              essential education.
            </p>
            <Link href="/skilling/womenEmpowerment">
              <button
                href="/education/child_sponsorship"
                className="mr-5 mt-4 button hover:animate-bounce"
              >
                learn more
              </button>
            </Link>
          </div>

          <div
            className="group bg-white cursor-pointer flex flex-col m-5 z-30 p-5 transition
        duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <h1 className="font-black text-blue-600 text-2xl ">
              Youth Entreprenuership Club
            </h1>
            <p>
              An exciting and fulfilling career developement program where a
              serving professional gives a hand to an upcoming young person up
              the steps to the same.
            </p>
            <Link href="/skilling/yec">
              <button className="mr-5 mt-4 button hover:animate-bounce">
                learn how
              </button>
            </Link>
          </div>

          <div
            className="group bg-white cursor-pointer flex flex-col m-5 z-30 p-5 transition
        duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <h1 className="font-black text-blue-600 text-2xl">Testmonials</h1>
            <p>
              Ever since our start up, we have collaborated with supporters and
              friends to give support to Ugandan young people through education.
            </p>
          </div>
        </div>

        {/* feed */}
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default skilling;
