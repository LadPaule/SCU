import Head from "next/head";
import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CrisisCare() {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      // Todo: if clicked faq is clicked again, close it.
      setClicked(null);
    }
    setClicked(index);
  };
  const slideImages = [
    {
      url: "/crisis/crisis1.webp",
      caption: "crisis management",
      mainCaption: "Responding to the needs of the community",
    },
    {
      url: "/crisis/crisis2.webp",
      caption: "crisis management ",
      mainCaption: "Responding to the needs of the community",
    },
    {
      url: "/crisis/crisis3.webp",
      caption: "crisis management ",
      mainCaption: "Responding to the needs of the community",
    },
  ];

  const faq = [
    {
      question: "Who we support?",
      answer:
        "This program supports a widely range of individuals /Victims including: Sexually/physically assaulted, Homeless young people, Divorced Mothers, Accident Victims, Deported Fellows, Single & Neglected Parents.",
    },
    {
      question: "Why We support?",
      answer:
        "In Uganda we have no established welfare system and because of this: an alarming number of Ugandans suffer to death as no support is availed to their plight. At SCU; We work to alleviate these situations and merge this gap in the best way that we can.",
    },
    {
      question: "How we support?",
      answer: `Jesus' love guides our hearts to sacrificially give our time and resources as we relate with depressed people that are struggling to appreciate the purpose of life.
        We avail daily discipleship classes to make Jesus piece and part of the renewed lives
        To counter depression and anxiety we avail counselling to rebuild the broken and wounded.
        We still go an extra mile to avail monthly medical checkups and skilling classes to ensure that all our beneficiaries of the program exit SCU after holistic transformation in Faith, Family, & Finance.`,
    },
    {
      question: "How to Help?",
      answer: "Click Participate to join the see how you can help",
    },
  ];
  return (
    <div className="bg-gray-300">
      <Head>
        <title>Crisis Care & Management</title>
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
        <meta name="theme-color" content="#ffffff"/>
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
            src="/crisis/crisis.webp"
            width={1440}
            height={560}
            objectFit="contain"
            loading="eager"
            alt="crisis care banner"
          />
          <div className="hidden md:block absolute -mt-28 px-10 md:mb-0 bg-gray-300/50">
            <h1 className="font-black font-sans text-2xl md:text-4xl whitespace-nowrap text-scu_blue-light mb-2">
              Crisis care & Management
            </h1>
            <p className="hidden lg:block text-scu_blue-light text-xl text-left px-2 pb-1 font-bold">
              Caring in crisis for individuals going through a moment of
              disaster or unforeseen emergencies in order to save their lives by
              providing them with food, medication and small essentials as hope
              is restored.
            </p>
          </div>
          <div className="flex-col lg:grid lg:grid-cols-2 h-auto">
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              interval={5000}
            >
              {slideImages.map((slide) => (
                <div key={slide.caption}>
                  <Image
                    src={slide.url}
                    alt={slide.caption}
                    width={780}
                    height={440}
                    objectFit="contain"
                    loading="lazy"
                    className="object-fit"
                  />
                </div>
              ))}
            </Carousel>

            <div className="bg-white shadow-md">
              <h1 className="text-blue-500 text-3xl font-sans font-black ml-4">
                Crisis Care & Management
              </h1>
              <p className="mx-4 whitespace-normal text-md">
                Caring in crisis for individuals going through a moment of
                disaster or unforeseen emergencies in order to save their lives
                by providing them with food, medication and small essentials as
                hope is restored.
                <br />
                Adullam Caverna (Cave of Adullam 1 Samuel 22) is our shelter
                where people faced with temporary homelessness or escaping
                domestic violence are provided with a home for relief as we
                restore hope. Managing crisis and natural calamities when they
                occur in order to save lives, restore hope and rebuild family
                cohesion. Our team of volunteers are always readily equipped to
                face and reach out to those in crisis. We give a hand up not a
                hand out to all those in crisis plight.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col px-2 mt-2 bg-gray-200">
          <h1 className="whitespace-nowrap text-blue-600 text-xl font-black ">
            Frequently Asked questions
          </h1>
          <div className="accordion accordion-flush" id="accordionFlush">
            {faq.map((qtn, index) => (
              <div
                className="accordion-item border-t-0 border-l-0 border-r-0 rounded-sm bg-blue-300 border border-blue-400"
                key={index}
              >
                <h1
                  onClick={() => toggle(index)}
                  className="flex mb-0"
                  id="flush-headingOne"
                >
                  <button
                    className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-blue-200 border-0 rounded-none 
                    transition focus:outline-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    {qtn.question}
                  </button>

                  <span>
                    {clicked === index ? (
                      <ChevronDownIcon className="h-6 font-bold text-white" />
                    ) : (
                      <ChevronUpIcon className="h-6 font-bold text-scu_blue-light" />
                    )}
                  </span>
                </h1>
                {clicked === index ? (
                  <div
                    className="accordion-collapse border-0"
                    id="flush-collapseOne"
                    aria-labelledby="flush-headingOne"
                    aria-controls="flush-collpseOne"
                    data-bs-parent="accordionFlush"
                  >
                    <p className="text-sm text-scu_blue-light font-bold py-4 px-5">
                      {qtn.answer}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* feed */}
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default CrisisCare;
