import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);

export default function ArticleFeed() {
  return <div>Article</div>;
}

// export async function getStaticProps({ }) {
//   const id = params.id;
//   const query = gql`
//     query Article($id: String!) {
//       article(where: { id: $id }) {
//         id
//         title
//         articleBody
//         images {
//           url
//         }
//       }
//     }
//   `;
//   const { article } = await graphcms.request(query, { id });
//   console.log(article);
//   return {
//     props: {},
//     revalidate: 60,
//   };
// }

// export async function getStaticPaths() {
//   const query = gql`
//     query Articles {
//       articles {
//         id
//       }
//     }
//   `;
//   const { articles } = await graphcms.request(query);
//   console.log(articles);
//   return {
//     paths: articles.map((article) => ({ params: { id: article.id } })),
//     fallback: "blocking",
//   };
// }
