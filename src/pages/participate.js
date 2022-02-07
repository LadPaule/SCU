import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function participate() {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>Participate</title>
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

      <main className="relative m-0 p-0 bg-gray-200">
        <div className="z-50 fixed flex float-right flex-col space-y-2">
          <button className="but my-2 ml-4 "><Link href={"/prayer-calendar"} passHref>Pray</Link></button>
          <button className="but my-2 ml-4 "><Link href={"https://www.stewardship.org.uk/partners/20217424"} passHref>Give</Link></button>
          <button className="but my-2 ml-4 "><Link href={"/about"} passHref>Visit</Link></button>
        </div>
        {/* banner */}
        <div className="relative ">
          <Image
            className="m-0 p-0"
            src="/participate/participatebanner.webp"
            width={1440}
            height={560}
            objectFit="contain"
            loading="eager"
            alt="Participate"
          />
          <div className="hidden md:block absolute -mt-28 px-10 md:mb-0 bg-gray-300/50">
            <h1 className="font-black font-sans text-2xl md:text-4xl whitespace-nowrap text-scu_blue-light mb-2">
              Get Involved
            </h1>
            <p className="hidden lg:block text-scu_blue-light text-xl text-left px-2 pb-1 font-bold">
              Participate and be a part of our ever growing team by supporting
              our programs through visiting us here on the ground, volunteering
              with our programs of your choice. You can also stand with us in
              Prayers
            </p>
          </div>
        </div>
        <div className="text-center px-4 md:py-12 py-8">
          <h1 className="text-blue-700 text-2xl font-bold">
            You can join us in prayer,{" "}
            <span className="text-scu_blue-light italic underline">
              <Link passHref href="/prayer-calendar">
                see our Prayer Calendar here
              </Link>
            </span>
          </h1>
        </div>
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
          <div className="lg:flex items-center justify-between">
            <div className="lg:w-1/3">
              <h1 className="text-4xl text-blue-500 font-sans font-bold dark:text-white">
                Take a safari trip
              </h1>
              <p className="text-base leading-6 mt-4 text-gray-800 dark:text-gray-100">
                If you&apos;ve been longing to take a safari trip to Africa with
                your family or associates. Uganda is richly endowed with
                welcoming people, a preserved culture and great places to visit
                including beautiful sceneries, the source of the Nile, equator,
                national game parks, the mighty Murchison falls, mountain
                gorilla tracking and many more. Get hosted in our secure and
                furnished Smile house, great meals that suite your taste and
                dieting needs, standby power generator, fast and stable WiFi and
                experienced staff and volunteers.
              </p>
            </div>
            <div className="lg:w-7/12 lg:mt-0 mt-8">
              <div className="w-full h-full bg-red-200">
                <img
                  src="/participate/toursMain.webp"
                  alt="apartment design"
                  className="w-full sm:block hidden"
                />
                <img
                  src="/participate/gapyear.webp"
                  alt="apartment design"
                  className="sm:hidden block w-full"
                />
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                <img
                  src="/participate/tour2.webp"
                  className="w-full"
                  alt="kitchen"
                />
                <img
                  src="/participate/twot.webp"
                  className="w-full"
                  alt="sitting room"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="pt-4 pb-2 items-center lg:pb-4 bg-[#F3F4F6]">
          <div className="container content-center ">
            <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 space-x-8 items-center justify-evenly">
              <div className="ml-2">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src="/participate/mission.webp"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3 className="text-blue-500 text-xl font-sans font-bold">
                      Join in Missions & Projects
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                      Take part in our building projects that randomly come up
                      depending on need, interest and funding. We have had our
                      hands on building shelters for widows, classrooms and
                      Church structures. Once in a while, we together with a
                      team of local doctors and visiting volunteers conduct
                      medical missions where we offer medical check-ups and
                      treatment in the impoverished community where we serve.
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-2">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src="/participate/help.webp"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3 className="text-blue-500 text-xl font-sans font-bold">
                      Support a Person in Need
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                      Choose to sponsor and empower an individual on a long term
                      monthly basis. There are five categories of people in need
                      that we carefully assess and enrol in our programs; child
                      education sponsorship, professional and career twinning,
                      widow sponsorship and short term skilling young people.
                      You can also sponsor a volunteer with a monthly stipend or
                      a pastor with a monthly gift.
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-2">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src="/participate/gapyear.webp"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3 className="text-blue-500 text-xl font-sans font-bold">
                      Gap Year Student&apos;s Trip
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                      Whether you&apos;re considering gap time directly after
                      high school, during college, taking a year off is a great
                      opportunity to learn through new experiences. With over
                      ten years&apos; experience in hosting Gap Year Students
                      from the UK and the US, Smile Charity Uganda is your
                      choice destination for a three to nine month&apos;s active
                      service in relation to our programs. We ensure safety
                      without compromising on the local experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default participate;
