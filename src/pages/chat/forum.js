import Head from "next/head";
import { useState } from "react";
import { Chat } from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";
import Cookies from "universal-cookie";
import { StreamChat } from "stream-chat";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ChannelContainer from "../../components/chat/ChannelContainer";
import ChannelListContainer from "../../components/chat/ChannelListContainer";
import Auth from "../../components/chat/Auth";

const cookies = new Cookies();
const apiKey = process.env.STREAM_API_KEY;
const client = StreamChat.getInstance(apiKey);
const authToken = cookies.get("token");

if (authToken) {
  client.connectUser(
    {
      id: cookies.get("userId"),
      name: cookies.get("username"),
      fullName: cookies.get("fullname"),
      hashedPassword: cookies.get("hashedPassword"),
      phoneNumber: cookies.get("phoneNumber"),
      image: cookies.get("avatarURL"),
      email: cookies.get("email"),
    },
    authToken
  );
}

function Forum() {
  const [createType, setCreateType] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!authToken) return <Auth />;

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

      <main className="m-0 p-0 h-screen">
        <div className="">
          <Chat client={client} theme="team light">
            <ChannelListContainer
              isCreating={isCreating}
              setCreate={setCreate}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
            <ChannelContainer
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              createType={createType}
            />
          </Chat>
        </div>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Forum;
