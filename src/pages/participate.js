import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function participate() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Participate</title>
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

      <main className="m-0 p-0 bg-gray-400">
        {/* banner */}
        <div className="relative ">
          <Image
            className="mix-blend-overlay"
            src="/participate/participatebanner.webp"
            width={1440}
            height={560}
            objectFit="contain"
            loading="eager"
          />
          <div className="absolute -mt-44 ">
            <h1 className="font-black px-10 text-3xl md:text-6xl whitespace-nowrap text-scu_blue-light mb-2">
              Get Involved
            </h1>
            <p className="hidden lg:block text-scu_blue-light text-xl font-bold px-10 text-left">
              Participate and be a part of our ever growing team by supporting
              our programs through visiting us here on the ground, volunteering
              with our programs of your choice. You can also stand with us in
              Prayers
            </p>
          </div>
        </div>

        <div className="p-0 m-0 bg-white flex flex-col md:flex-row">
          <div className="mx-4">
            <Image
              src="/participate/gapYearStudents.webp"
              width={700}
              height={500}
              objectFit="contain"
              loading="lazy"
              className="rounded-md mr-4 shadow-sm"
            />
          </div>
          <div className="p-2">
            <h1 className="top-2 right-2 text-blue-600 font-black text-2xl">
              Gap Year Student Trip
            </h1>
            <p className="text- font-bold whitespace-normal text-sm">
              With nine years’ experience in hosting Gap Year Students from the
              UK and the US, Smile Charity Uganda is your choice destination for
              a three to nine month’s active service in relation to our
              programs. We ensure safety without compromising on the local
              experience.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 mx-auto md:-mt-10">
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
        </div>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default participate;
