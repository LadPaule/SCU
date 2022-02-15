import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import AOS from 'aos'

export default function ChildForm() {
  const getInitialState = () => {
    const value = "select mode of support";
    return value;
  };

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [modeOfSupport, setModeOfSupport] = useState(getInitialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending");

    let data = {
      email: email,
      fullName: fullName,
      country: country,
      postalAddress: postalAddress,
      modeOfSupport: modeOfSupport,
    };
    fetch("/api/support", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("response received");
      if (res.status === 200) {
        setSubmitted(!submitted);
        setEmail("");
        setFullName("");
        setPostalAddress("");
        setModeOfSupport("");
      }
    });
  };
   useEffect(() => {
     AOS.init({ duration: 2000 });
   }, []);

  return (
    <div className="h-screen">
      <Head>
        <title>
          Smile Charity Uganda (SCU) - A helping Hand to Those in Need
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
        <meta name="theme-color" content="#ffffff" />
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

      <div className="flex flec-col max-hscreen">
        <div
          data-aos="fade-up"
          className="flex-1 flex-col content-center justify-items-center p-8"
        >
          <h1>
            Please fill this form to proceed, we will contact you shortly!
          </h1>
          <form onSubmit={handleSubmit} action="submit">
            <div
              data-aos="zoom-in-up"
              className="auth__form-container_fields-content_input"
            >
              <label htmlFor="fullName">Full Name</label>
              <input
                name="fullName"
                type="text"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                placeholder="Full Name"
                required
              />
            </div>
            <div
              data-aos="zoom-in-down"
              className="auth__form-container_fields-content_input"
            >
              <label htmlFor="emailAddress">Email Address</label>
              <input
                name="emailAddress"
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="you@domain.com"
                required
              />
            </div>

            <div
              data-aos="zoom-in-up"
              className="auth__form-container_fields-content_input"
            >
              <label htmlFor="Country">Country</label>
              <input
                name="Country"
                type="text"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                placeholder="Country"
                required
              />
            </div>
            <div
              data-aos="zoom-in-down"
              className="auth__form-container_fields-content_input"
            >
              <label htmlFor="PostalAddress">Postal Address</label>
              <input
                onChange={(e) => {
                  setPostalAddress(e.target.value);
                }}
                name="PostalAddress"
                type="text"
                placeholder="Postal Address"
                required
              />
            </div>
            <div
              data-aos="zoom-in-down"
              className="auth__form-container_fields-content_input"
            >
              <label htmlFor="modeOfSupport">Mode of Support</label>
              <select
                onChange={(e) => {
                  setModeOfSupport(e.target.value);
                }}
                name="modeOfSupport"
                className="w-80"
                value="mode of support"
              >
                <option value="select mode of support">
                  Select Mode of Support
                </option>
                <option value="Monthly support">Monthly</option>
                <option value="one time support">Quaterly</option>
                <option value="one time support">Once in six months</option>
                <option value="one time support">Annually</option>
                <option value="one time support">once in 5 years</option>
              </select>
            </div>

            <div  className=" space-x-80 mt-4 flex">
              <Link href="/children_list" passHref>
                <button
                  type="button"
                  className="rounded-md cursor-pointer w-18 bg-scu_blue text-white font-sans px-2 py-2 "
                >
                  Back
                </button>
              </Link>
              <Link href="/" passHref>
                <button
                  
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  type="submit"
                  className="rounded-md cursor-pointer hover:animate-bounce bg-scu_blue text-white font-sans px-2 py-2 "
                >
                  Confirm
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
