import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useEffect, useRef } from "react";
import { GraphQLClient } from "graphql-request";


export function CalendarDetails({ publication }) {
  const viewer = useRef(null);
  const fileUrl = publication.asset.url;
  useEffect(() => {
    import("@pdftron/webviewer").then(() => {
      WebViewer(
        {
          path: "/lib",
          initialDoc:fileUrl,
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // docViewer.getDocument(fileUrl)
      });
    });
  }, []);

  return (
    <div className="">

      <div className="w-full h-screen" ref={viewer} />
    </div>
  )

}

export function Calendar({ publications }) {
  return (
    <div className="">
      {publications.map((publication) => (
        <div className="" key={publication.id}>
          <CalendarDetails publication={publication} />
        </div>
      ))}
    </div>
  );
}

function PrayerCalendar({ publications }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>How you can Pray with Us.</title>
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
      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Calendar publications={publications} />
        {/* feed */}
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default PrayerCalendar;

export async function getStaticProps() {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);
  const { publications } = await graphcms.request(
    `
    {
      publications{
        id
        name
        asset{
          url
          }
     }
  }
  `
  );
  return {
    props: {
      publications,
    },
  };
}
