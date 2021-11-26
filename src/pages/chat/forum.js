import Head from "next/head";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { StreamChat } from "stream-chat";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { ChannelListContainer, ChannelContainer } from "../../components/chat";

const apiKey = process.env.STREAM_API_KEY;
const client = StreamChat.getInstance(apiKey);

function forum() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>SCU Forum</title>
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

      <main className="">
        {/* banner */}
        <div className="">
          <Chat client={client} theme="team light">
            <ChannelListContainer />
            <ChannelContainer />
          </Chat>
        </div>
        {/* feed */}
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default forum;