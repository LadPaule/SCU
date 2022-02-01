import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { GraphQLClient } from "graphql-request";
// import {
//   Animator,
//   ScrollContainer,
//   ScrollPage,
//   batch,
//   Fade,
//   FadeIn,
//   Move,
//   MoveIn,
//   MoveOut,
//   Sticky,
//   StickyIn,
//   ZoomIn,
// } from "react-scroll-motion";

function about({ scuVolunteers }) {
  return (
    <div className="">
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

      <div className="m-0 p-0">
        {/* banner */}
        <div className="relative mix-blend-overlay">
          <Image
            className="w-full h-full"
            src="/about/main.webp"
            width={1400}
            height={430}
            objectFit="contain"
            loading="eager"
            alt="about"
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
        <div>
          <>
            <section class="max-w-8xl mx-auto container bg-white pt-16">
              <div>
                <div role="contentinfo" class="flex items-center flex-col px-4">
                  <p
                    tabindex="0"
                    class="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4"
                  >
                    our organisation strategy
                  </p>
                </div>
                <div
                  tabindex="0"
                  aria-label="group of cards"
                  class="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
                >
                  <div
                    tabindex="0"
                    aria-label="card 1"
                    class="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div class="w-20 h-20 relative mr-5">
                      <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                      <div class="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg"
                          alt="drawer"
                        />
                      </div>
                    </div>
                    <div class="w-10/12">
                      <h2
                        tabindex="0"
                        class="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                      >
                        Our Vision
                      </h2>
                      <p
                        tabindex="0"
                        class="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        Smile Charity Uganda (SCU) envisions holistically
                        empowered and transformed lives through education,
                        practical evangelism initiatives and community outreach
                        programs in Uganda.
                      </p>
                    </div>
                  </div>
                  <div
                    tabindex="0"
                    aria-label="card 2"
                    class="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div class="w-20 h-20 relative mr-5">
                      <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                      <div class="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg"
                          alt="check"
                        />
                      </div>
                    </div>
                    <div class="w-10/12">
                      <h2
                        tabindex="0"
                        class="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                      >
                        Mission
                      </h2>
                      <p
                        tabindex="0"
                        class="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        we aim for a long term rebuilding of lives through our
                        domains namely Discipleshiop & Evangelism, Education
                        Support, Skilling and Crisis care & management.
                      </p>
                    </div>
                  </div>
                  <div
                    tabindex="0"
                    aria-label="card 3"
                    class="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div class="w-20 h-20 relative mr-5">
                      <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                      <div class="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg"
                          alt="html tag"
                        />
                      </div>
                    </div>
                    <div class="w-10/12">
                      <h2
                        tabindex="0"
                        class="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                      >
                        Major Mbjective
                      </h2>
                      <p
                        tabindex="0"
                        class="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        our major objective is to promote and advance the
                        Christian faith through practical community initiatives
                        as a means to improve on the quality of life within
                        communities of Uganda
                      </p>
                    </div>
                  </div>
                  <div
                    tabindex="0"
                    aria-label="card 4"
                    class="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div class="w-20 h-20 relative mr-5">
                      <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                      <div class="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg"
                          alt="monitor"
                        />
                      </div>
                    </div>
                    <div class="w-10/12">
                      <h2
                        tabindex="0"
                        class="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                      >
                        Values
                      </h2>
                      <p
                        tabindex="0"
                        class="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        christ Centered, Integrirt, Excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        </div>
        {/* Inception */}

        {/* Organisation mission */}

        {/* organisation Vision */}

        {/* General Objective */}
        {/* Values */}

        {/* feed */}
        <div>
          <div class="container flex justify-center mx-auto pt-16">
            <div data-aos="fade-up">
              <p class="text-gray-500 text-lg text-center font-normal pb-3">
                Meet the Team
              </p>
              <h1 class="xl:text-4xl text-3xl text-center text-blue-600 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                The Talented People Behind the Scenes of the Organization
              </h1>
            </div>
          </div>
          <div class="w-full bg-gray-100 px-10 pt-10">
            {/* Will do edits here  */}
            <div class="container mx-auto">
              <div
                role="list"
                aria-label="Behind the scenes People "
                class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
              >
                {/* Card begins here */}
                {scuVolunteers.map((volunteer) => (
                  <div
                    key={volunteer.id}
                    role="listitem"
                    className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                  >
                    <div className="rounded overflow-hidden shadow-md bg-white">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="w-48 h-48">
                          {volunteer.image.length > 0 && (
                            <Image
                              src={volunteer.image[0].url}
                              alt={volunteer.fullName}
                              role="img"
                              objectFit="contain"
                              loading="lazy"
                              className="rounded-full object-cover h-full w-full shadow-md"
                            />
                          )}
                        </div>
                      </div>
                      <div className="px-6 mt-16">
                        <h1 className="font-bold text-3xl text-center mb-1">
                          {volunteer.fullName}
                        </h1>
                        <p className="text-gray-800 text-sm text-center">
                          {volunteer.designation}
                        </p>
                        <p className="text-center text-gray-600 text-base pt-3 font-normal">
                          {volunteer.story}
                        </p>
                        <div className="w-full flex justify-center pt-5 pb-5">
                          <a href={volunteer.url} className="mx-5">
                            <div aria-label="LinkedIn" role="img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* card ends here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default about;

export async function getStaticProps() {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);
  const { scuVolunteers } = await graphcms.request(
    `
   query ScuVolunteers()
  {
    scuVolunteers{
    id
    fullName
    story
    designation
    image{
      url
      width
      height
    }
    url
    
  }
  }
  `
  );
  return {
    props: {
      scuVolunteers,
    },
  };
}
