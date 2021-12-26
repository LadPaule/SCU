import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function about() {
  return (
    <div className="bg-gray-500">
      <Head>
        <title>About - Smile Charity Uganda (SCU)</title>
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
        <div className="relative mix-blend-overlay">
          <Image
            className="w-full h-full"
            src="/about/main.webp"
            width={1400}
            height={430}
            objectFit="contain"
            loading="eager"
          />
          <div className="absolute -mt-44 px-10">
            <h1 className="font-black text-xl md:text-2xl whitespace-nowrap text-yellow-400 mb-2">
              About Smile charity Uganda
            </h1>
            <p className="hidden lg:block text-scu_blue-light font-serif text-xl text-left px-2 font-bold">
              Smile Charity Uganda is based on plot 700 Munyonyo road, Naluvule,
              Wakiso District in Uganda and operates mainly in Kampala and
              Wakiso districts. Our great impact has so far been realised in the
              city slums of Nabulagala in Kampala and the impoverished
              communities of Nansana in Wakiso district.
            </p>
          </div>
        </div>
        <div className="flex-col lg:grid lg:grid-cols-2 h-auto bg-white -mt-2">
          <div className="lg:grid lg:grid-cols-1 h-auto m-0">
            <Image
              src="/about/vision2.webp"
              alt="main"
              width={600}
              height={460}
              objectFit="contain"
              loading="lazy"
              className=""
            />
          </div>

          <div className="bg-white shadow-md">
            <h1 className="text-blue-500 text-xl font-black ml-4 lg:text-3xl">
              EXTENDING A HELPING HAND TO THOSE IN NEED
            </h1>
            <p className="mx-4 whitespace-normal font-serif text-xl">
              Smile Charity Uganda is 100% supported by both part time and
              full-time volunteers who freely give their time, skills and
              talents to run the activities of the organization. <br />
              The organization provides a very small monthly stipend to meet
              their travel needs and food while in the field and on base
              serving. <br /> <br />
              We are currently open to have new friends and partners whether
              individuals, groups, Churches or Organisations to expand our work
              and ministry of caring for children at risk, communities in need
              and the Church in Uganda especially in Kampala and Wakiso
              districts.
            </p>
          </div>
        </div>
        <div className="flex-col lg:grid lg:grid-cols-2 h-auto bg-white -mt-2">
          <div className="bg-white shadow-md">
            <h1 className="text-blue-500 text-xl font-black ml-4 lg:text-3xl">
              EXTENDING A HELPING HAND TO THOSE IN NEED
            </h1>
            <p className="mx-4 whitespace-normal font-serif text-xl">
              Smile Charity Uganda is 100% supported by both part time and
              full-time volunteers who freely give their time, skills and
              talents to run the activities of the organization. <br />
              The organization provides a very small monthly stipend to meet
              their travel needs and food while in the field and on base
              serving. <br /> <br />
              We are currently open to have new friends and partners whether
              individuals, groups, Churches or Organisations to expand our work
              and ministry of caring for children at risk, communities in need
              and the Church in Uganda especially in Kampala and Wakiso
              districts.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-1 h-auto m-0">
            <Image
              src="/about/vision2.webp"
              alt="main"
              width={600}
              height={460}
              objectFit="contain"
              loading="lazy"
              className=""
            />
          </div>
        </div>

        {/* feed */}
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default about;
