import Image from "next/image";
import Link from "next/link";

export default function ArticlesFeed({ articles }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let name = months[d.getMonth()];

  const getPreviousMonth = () => {
    let d = new Date();
    let name = months[d.getMonth()];
    if (name === "January") {
      name = "December";
    } else {
      name = months[d.getMonth() - 1];
    }
    return name;
  };

  return (
    <div className="">
      <div className="flex flex-wrap">
        {articles.map((article) => (
          <div className="w-full md:w-1/2 lg:w-1/3 px-3" key={article.id}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-0 py-0">
                <Image
                  src={article.images[0].url}
                  className="rounded-md items-center justify-center cursor-pointer"
                  alt={article.title}
                  width={700}
                  height={500}
                  objectFit="contain"
                  loading="lazy"
                />

                <div className="font-bold text-xl p-4 text-blue-500 mb-2">
                  {article.title}
                </div>
                <p className="text-gray-700 text-base px-4 line-clamp-4 ">
                  {article.articleBody}
                </p>
                <div className="content-center p-4 place-self-center">
                  <Link key={article.id} href={`/news/${article.id}`} passHref>
                    <button className="button" type="button">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex whitespace-nowrap ml-4 items-center justify-evenly mb-4 flex-grow text-blue-600 font-sans ">
        <div className="bg-gray-300/10 text-2xl w-800 shadow-sm rounded-md">
          <Link href={`/monthlyPublication`} passHref>
            <a href={`/monthlyPublication`}>
              <h1 className="whitespace-normal hover:text-scu_blue-light decoration-slice">
                See {getPreviousMonth()}&apos;s Newsletter
              </h1>
            </a>
          </Link>
        </div>
        <div className="bg-gray-300/10 text-2xl w-800 shadow-sm rounded-md">
          <Link href={`/prayer-calendar`} passHref>
            <a href={`/prayer-calendar`}>
              <h1 className="whitespace-normal hover:text-scu_blue-light decoration-slice">
                See {name}&apos;s Prayer calendar
              </h1>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
