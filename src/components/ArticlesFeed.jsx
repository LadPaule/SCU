import Image from "next/image";
import Link from "next/link";

export default function ArticlesFeed({ articles }) {
  return (
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
                  <button className="button" type="button">Read more</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
