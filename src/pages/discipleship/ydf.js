import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Ydf() {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      // Todo: if clicked faq is clicked again, close it.
      setClicked(null);
    }
    setClicked(index);
  };
  const faq = [
    {
      question: "How can a young man be part of YDF?",
      answer:
        "A young person has to be from any local church however those looking for a local church will be guided and alocated one.",
    },
    {
      question: "How can I help YDF go forward?",
      answer: "You can help in various ways. See them here",
    },
  ];

  const slideImages = [
    {
      url: "/discipleship/ydf1.webp",
      caption: "YDF",
      mainCaption: "Youth Discipleship Fellowship",
    },
    {
      url: "/discipleship/ydf2.webp",
      caption: "YDF",
      mainCaption: "Youth Discipleship Fellowship",
    },
    {
      url: "/discipleship/ydf3.webp",
      caption: "YDF",
      mainCaption: "Youth Discipleship Fellowship",
    },
  ];
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Youth Discipleship Fellowship</title>
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
        <meta name="theme-color" content="#ffffff"/><meta
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
            <h1 className="text-blue-500 text-3xl font-black ml-4">
              Youth Discipleship Fellowship
            </h1>
            <p className="mx-4 whitespace-normal text-md">
              As the biggest population, the youths need to be trained to work
              with the way of the Lord for the asks and replies it&apos;s self
              in Psalms 119:9 “How shall a young man live his way pure? By
              living and obeying Your Word and following it&apos;s rules”. Youth
              Discipleship Fellowship is always towards evangelising and
              discipling the young people as well as teaching and metoring them
              in life skills, sharing in recreation activities. As a Christ
              centered organization, we work towards developing a Christ
              acknowledging society and generation through youth guidance and
              mentorship under the Discipleship and Evagelism domain.
            </p>
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

export default Ydf;
