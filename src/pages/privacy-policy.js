import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Aos from "aos";
import { useEffect } from "react";

function PrivacyPolicy() {
      useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div className="bg-gray-300">
      <Head>
        <title>Smile Charity Uganda, (SCU) Privacy policy</title>
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
        <meta name="theme-color" content="#ffffff" />
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

      <main data-aos="fade-up" className="max-w-screen-xl mx-auto">
        {/* banner */}
        <div className="ml-4 mb-4 mt-2">
          <h1
            data-aos="fade-up"
            className="text-blue-600 font-sans font-bold text-2xl"
          >
            Privacy Policy for Smile Charity Uganda
          </h1>
          <p className="text-md font-medium ">
            At Smile Charity Uganda, accessible from
            <a
              className="mx-2 italic underline hover:text-scu_blue-light"
              href="https://www.smilecharityuganda.org/"
              passHref
            >
              smilecharityuganda.org
            </a>
            , one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is
            collected and recorded by Smile Charity Uganda and how we use it.
          </p>
          <br />
          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>
          <br />
          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in Smile Charity Uganda. This policy
            is not applicable to any information collected offline or via
            channels other than this website.
          </p>
          <h2 className="text-blue-500 font-sans font-bold text-3xl">
            Consent
          </h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms of service.
          </p>
          <br />
          <h2 className="text-blue-500 font-sans font-bold text-2xl">
            Information we collect
          </h2>
          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>
          <br />
          <p>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </p>
          <br />
          <p>
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </p>
          <br />
          <h2 className="text-blue-500 font-sans font-bold text-2xl">
            How we use your information
          </h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <br />
          <ul className="list-decimal mx-4">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalise, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>
          <br />
          <h2 className="text-blue-500 font-sans font-bold text-2xl">
            Log Files
          </h2>
          <p>
            Smile Charity Uganda follows a standard procedure of using log
            files. These files log visitors when they visit websites. All
            hosting companies do this and a part of hosting services&apos;
            analytics. The information collected by log files include internet
            protocol (IP) addresses, browser type, Internet Service Provider
            (ISP), date and time stamp, referring/exit pages, and possibly the
            number of clicks. These are not linked to any information that is
            personally identifiable. The purpose of the information is for
            analyzing trends, administering the site, tracking users&apos;
            movement on the website, and gathering demographic information.
          </p>
          <br />
          <h2 className="text-blue-500 font-sans font-bold text-2xl">
            Cookies and Web Beacons
          </h2>
          <p>
            Like any other website, Smile Charity Uganda uses
            &apos;cookies&apos;. These cookies are used to store information
            including visitors&apos; preferences, and the pages on the website
            that the visitor accessed or visited. The information is used to
            optimize the users&apos; experience by customizing our web page
            content based on visitors&apos; browser type and/or other
            information.
          </p>
          <br />
          <h2 className="text-blue-500 font-sans font-bold text-2xl">
            Advertising Partners Privacy Policies
          </h2>
          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Smile Charity Uganda.
          </p>
          <br />
          <p>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Smile Charity
            Uganda, which are sent directly to users&apos; browser. They
            automatically receive your IP address when this occurs. These
            technologies are used to measure the effectiveness of their
            advertising campaigns and/or to personalize the advertising content
            that you see on websites that you visit.
          </p>
          <br />
          <p>
            Note that Smile Charity Uganda has no access to or control over
            these cookies that are used by third-party advertisers.
          </p>{" "}
          <br />
          <h2 className="text-blue-500 font-sans font-bold text-2xl">
            Third Party Privacy Policies
          </h2>
          <p>
            Smile Charity Uganda&apos;s Privacy Policy does not apply to other
            advertisers or websites. Thus, we are advising you to consult the
            respective Privacy Policies of these third-party ad servers for more
            detailed information. It may include their practices and
            instructions about how to opt-out of certain options.{" "}
          </p>
          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers&apos;
            respective websites.
          </p>
          <br />
          <h2 className="text-blue-500 font-sans font-bold text-2xl">
            GDPR Data Protection Rights
          </h2>
          <p>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <p>
            The right to access You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
          </p>
          <p>
            The right to rectification You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </p>
          <p>
            The right to erasure You have the right to request that we erase
            your personal data, under certain conditions.
          </p>
          <p>
            The right to restrict processing You have the right to request that
            we restrict the processing of your personal data, under certain
            conditions.
          </p>
          <p>
            The right to object to processing You have the right to object to
            our processing of your personal data, under certain conditions.
          </p>
          <p>
            The right to data portability You have the right to request that we
            transfer the data that we have collected to another organization, or
            directly to you, under certain conditions.
          </p>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
          <br />
          <h2 className="text-blue-500 font-sans font-bold text-2xl">
            Children&apos;s Information
          </h2>
          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>
          <p>
            Smile Charity Uganda does not knowingly collect any Personal
            Identifiable Information from children recognised as minors. If you
            think that your child provided any kind of information on our
            website, we strongly encourage you to contact us immediately and we
            will do our best efforts to promptly remove such information from
            our records.
          </p>
        </div>
        {/* feed */}
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
