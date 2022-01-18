import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Image from "next/image";

function ChildrenBibleClubs() {
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
        <title>Children Bible Clubs</title>
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
              Children Bible Clubs
            </h1>
            <p className="mx-4 whitespace-normal text-md">
              Working together with our growing Church partners, we continue to
              take young people through a consistent long term discipleship
              program geared for their spiritual growth as they eventually
              become leaders in their own Church and/or communities. <br /> Most
              of them are in school so we meet during their holidays. We are
              never tiring in our endeavor and calling to always reach out to
              both new and old grounds as the Lord draws hearts to Himself
              through us. With the help of our sisters and brothers who
              continuously support us and where the Lord allows, some keep
              coming over for a boots-on-the-ground experience.
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

export default ChildrenBibleClubs;
