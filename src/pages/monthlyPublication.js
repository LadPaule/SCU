import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useEffect, useRef } from "react";
import { GraphQLClient } from "graphql-request";


export function CalendarDetails({ newsletter }) {
  const viewer = useRef(null);
  const fileUrl = newsletter.file.url;
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
      <Head>
        <title>
          Smile Charity Uganda (SCU) Newsletter
        </title>
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

      <div className="w-full h-screen" ref={viewer} />
    </div>
  )

}

export function Calendar({ newsletters }) {
  return (
    <div className="">
      {newsletters.map((newsletter) => (
        <div className="" key={newsletter.id}>
          <CalendarDetails newsletter={newsletter} />
        </div>
      ))}
    </div>
  );
}

function Newsletter({ newsletters }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>The Latest News From Smile Charity Uganda</title>
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
        <Calendar newsletters={newsletters} />
        {/* feed */}
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Newsletter;

export async function getStaticProps() {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);
  const { newsletters } = await graphcms.request(
    `
    {
      newsletters{
        id
        period
        file{
          url
          }
     }
  }
  `
  );
  return {
    props: {
      newsletters,
    },
  };
}
