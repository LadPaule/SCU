import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ArticlesFeed from "../components/ArticlesFeed";
import { GraphQLClient } from "graphql-request";

function News({ articles }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>The Latest News from Smile Charity Uganda</title>
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
        <meta name="theme-color" content="#ffffff"/>
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

        <ArticlesFeed articles={articles} />

        {/* feed */}
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default News;
export async function getStaticProps() {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);
  const { articles } = await graphcms.request(
    `
    {
      articles{
        id
        title
        slug
        images{
          url
          height
          width
         }
        articleBody
     }
  }
  `
  );
  return {
    props: {
      articles,
    },
  };
}
