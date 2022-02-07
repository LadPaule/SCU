import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";

function discipleship() {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>Discipleship & Evangelism</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
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
            className="w-full  h-full"
            src="/discipleship/1.webp"
            width={1440}
            height={560}
            alt="Discipleship & Evangelism"
            objectFit="contain"
            loading="eager"
          />
          <div className="hidden md:block absolute -mt-28 px-10 md:mb-0 bg-gray-300/50">
            <h1 className="font-black font-sans text-2xl md:text-4xl whitespace-nowrap text-scu_blue-light mb-2">
              Discipleship & Evangelism
            </h1>
            <p className="hidden lg:block text-scu_blue-light text-xl text-left px-2 pb-1 font-bold">
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
            <h1 className=" top-2 right-2 text-blue-600 font-black text-xl">
              Pastors&apos; Dicipleship Fellowship (PDF) & Pastors&apos; Wives&apos;
              Discipleship Fellowship (PWDF)
            </h1>
            <p>
              We have a growing Fellowship of pastors (now 16) and their wives
              who meet fortnightly on Thursdays every month at the smile House.
              Together we grow physically (through aerobics and in the breaking
              of bread) and also Spiritually through sharing the word.
            </p>
            <Link href="/discipleship/pdf" passHref>
              <button
                href="/discipleship/pdf"
                className="mr-56 mt-4 w-200 button hover:animate-bounce"
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
              Children Bible Clubs (CBC)
            </h1>
            <p>
              We have children attending church and in need of a child-forcused
              class similar to a Sunday school that is not yet well developed in
              in these churches. <br /> Smile charity Uganda through our
              experienced christian child developement workers reach out to the
              children while empowering and equiping the church ministers.
            </p>
            <Link href="/discipleship/children_bible_clubs" passHref>
              <button className="mr-56 mt-4 button w-200">learn how</button>
            </Link>
          </div>

          <div
            className="group bg-white cursor-pointer flex flex-col m-5 z-30 p-5 transition
        duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <h1 className="font-black text-blue-600 text-xl">
              Youth Discipleship Fellowship (YDF)
            </h1>
            <p>
              Working together with our growing Church partners, We continue to
              take young people through a consistent long term dicsipleship
              program geared for their spiritual growth
            </p>
            <Link href="/discipleship/ydf" passHref>
              <button
                href="/discipleship/ydf"
                className="mr-56 mt-4 button w-200"
              >
                learn how
              </button>
            </Link>
          </div>
        </div>
      </main>
      {/* feed */}

      <Footer />
    </div>
  );
}

export default discipleship;
