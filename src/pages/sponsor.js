import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banners from "../components/Banners";
import LandingPage from "../utils/LandingPage";

export default function ChildForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
  };
  return (
    <div className="">
      <Head>
        <title>
          Smile Charity Uganda (SCU) - A helping Hand to Those in Need
        </title>
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

      <div className="flex flex-col justify-center items-center">
        <form action="" method="post">
          <div className="">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" />
          </div>
          <div className="">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div className="">
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="">
            <label htmlFor="postalAddress">Postal Address</label>
            <input type="text" name="postalAddress" id="postalAddress" />
          </div>
          <div className="">
            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="country" />
          </div>
          <div className="">
            <label htmlFor="type">
              <select name="type" id="type">
                <option value="oneTime">One time Support</option>
                <option value="monthly">Monthly Support</option>
              </select>
            </label>
          </div>
          <div className="button">
            <button className="">back</button>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="button"
            >
              commit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
