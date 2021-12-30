import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";

function discipleship() {
  return (
    <div className="bg-gray-500">
      <Head>
        <title>Discipleship & Evangelism</title>
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
            src="/discipleship/discpleship.webp"
            width={1440}
            height={560}
            objectFit="contain"
            loading="eager"
          />
          <div className="absolute -mt-44 px-10">
            <h1 className="font-black text-3xl md:text-6xl whitespace-nowrap text-scu_blue-light mb-2">
              Discipleship & Evangelism
            </h1>
            <p className="hidden lg:block text-scu_blue-light text-xl text-left px-2 font-bold">
              Participate and be a part of our ever growing team by supporting
              our programs through visiting us here on the ground, volunteering
              with our programs of your choice.
            </p>
          </div>
        </div>
      </main>
      {/* feed */}

      <Footer />
    </div>
  );
}

export default discipleship;
