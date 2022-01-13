import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ydf() {
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
      question: "What sort of children are sponsored?",
      answer:
        "Children who are impoverished coming from either orphaned or disadvantaged families, We also sponsor children that have been referred to us by our implementing partners like schools and churches.",
    },
    {
      question: "How do we select the children for sponsorship?",
      answer:
        "Through door to door research in slum areas and recommendations from implementing partners",
    },
    {
      question: "How much does it cost to sponsor a child?",
      answer:
        "It only costs 150000 Ugandan shillings which is equivalent to £30 or $40 per month.",
    },
    {
      question: "What does the sponsorship provide to the beneficiary?",
      answer:
        "We provide stationery , school fees, uniforms, basic health and feeding while at school.",
    },
    {
      question: "How long does the sponsorship last?",
      answer:
        "The sponsorship runs till the 18th birthday except for those who started school later due to different unavailable circumstances.",
    },
    {
      question: "How does the sponsor link with his/ her sponsored child?",
      answer:
        "Smile charity Uganda has a set system through which a sponsor and a child are able to exchange letters and video chats.",
    },
  ];

  const slideImages = [
    {
      url: "/banners/gapers.webp",
      caption: "Gap year Students",
      mainCaption: "With more than 10 years ",
    },
    {
      url: "/banners/womenEmpowerment.webp",
      caption: "Women Empowerment ",
      mainCaption: "The program attempts handcrafts",
    },
  ];
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Youth Discipleship Fellowship</title>
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
              Child Sponsorship Program
            </h1>
            <p className="mx-4 whitespace-normal text-md">
              Working together with our growing Church partners, we continue to
              take young people through a consistent long term discipleship
              program geared for their spiritual growth as they eventually
              become leaders in their own Church and/or communities. Most of
              them are in school so we meet during their holidays. <br />
              <br />
              We are never tiring in our endeavor and calling to always reach
              out to both new and old grounds as the Lord draws hearts to
              Himself through us. With the help of our sisters and brothers who
              continuously support us and where the Lord allows, some keep
              coming over for a boots-on-the-ground experience.
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

export default ydf
