import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home({}) {

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Smile Charity Uganda (SCU) - A helping Hand to Those in Need</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.webp" />
          <link rel="icon" type="image/webp" sizes="32x32" href="/favicon-32x32.webp" />
          <link rel="icon" type="image/webp" sizes="16x16" href="/favicon-16x16.webp" />
          <link rel="manifest" href="/site.webmanifest"></link>
          <meta name="description" content="Smile Charity uganda (SCU) is a christian non profit oganisation. We 
          are a Hand up, not a hand out. SCU operates on a defined Working Mechanism, DESC that is, Discipleship and Evangelism,
          Education Support, Skilling and Crisis care and Management" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
          
        {/* feed */}
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}