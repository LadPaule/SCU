import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banners() {
  const slideImages = [
    {
      url: "/banners/cbc.webp",
      caption: "Children Bible Clubs",
      mainCaption:
        "We take little ones through a consistent long term discipleship program geared for their spiritual growth",
    },
    {
      url: "/banners/tours.webp",
      caption: "Take a Safari Trip",
      mainCaption:
        "Uganda is richly endowed with welcoming people, preseved culture and great places to visit including beautiful sceneris, the source of the nile, equator...",
    },
    {
      url: "/banners/dixon.webp",
      caption: "Youth Empowerment",
      mainCaption:
        "We equip the youths with survival skills and later avail a small startup capital for them to startup up their own businesses",
    },
    {
      url: "/banners/gapers.webp",
      caption: "Gap year Students",
      mainCaption:
        "With more than 10 years of experience in hosting Gap year students from the UK and Us, we are your Choice destination for a three to nine month active service in relation to our programs",
    },
    {
      url: "/banners/womenEmpowerment.webp",
      caption: "Women Empowerment ",
      mainCaption:
        "The program attempts the women capacity to develop by their participation in skills training like Tailoring, knitting, handcrafts",
    },
    {
      url: "/banners/pdf.webp",
      caption: "Pastors Discipleship Fellowship",
      mainCaption:
        "Every fortnite on Thursdays, member pastors meet at Smile house for fellowship, Bible study, mutual exhortations and so much more",
    },
    {
      url: "/banners/sponsorship.webp",
      caption: "Profession & career Twinning",
      mainCaption:
        "An exciting and fulfilling career developement where a serving professional gives a hand to an upcoming young person up the steps of the same",
    },
  ];

  return (
    <div className="relative">
      <section className="absolute w-full h-48 bottom-0 z-20">
        <div className="hero"></div>
      </section>
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
              width={1850}
              height={920}
              objectFit="contain"
              loading="eager"
              className="object-fit"
            />
            <span className="absolute hidden md:block sm:font-bold lg:bottom-20 lg:font-black text-white z-50 text-4xl font-sans w-screen h-40 text-center">
              {slide.caption}
            </span>
            <p className="fixed z-40 font-bold w-screen h-500 text-center">
              {slide.mainCaption}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banners;
