// import { useState, useEffect } from "preact/hooks";
// import { Link } from "preact-router"

// import { HYGRAPH_ENDPOINT, HYGRAPH_TOKEN } from './settings';

import { GraphQLClient, gql } from 'graphql-request';

import "../app.css";

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";

// ! IF THIS IS NOT WORKING, TRY PREFIXING THE VARIABLES WITH 'VITE_'
// const hygraph = new GraphQLClient(
//   import.meta.env.HYGRAPH_ENDPOINT
//   // import.meta.env.VITE_HYGRAPH_ENDPOINT
// console.log("🚀 ~ import.meta.env.VITE_HYGRAPH_ENDPOINT:", `Bearer ${import.meta.env.VITE_HYGRAPH_ENDPOINT}`)
// );

// const hygraph = new GraphQLClient(
//   `${import.meta.env.HYGRAPH_ENDPOINT}`,
//   {
//     headers: {
//       Authorization: `Bearer ${import.meta.env.HYGRAPH_TOKEN}`
//     }
//   }
// );

export function Blog({ ssd=[] }: any) {
console.log("🚀 ~ Blog ~ ssd:", ssd)

  return (
    <div className="flex flex-col">

      <Header />

      <h1>This is the blog page with a bunch of posts</h1>

      <Footer />

    </div>
  );
}

const AllPosts = gql`
query AllPosts {
  blogPosts(orderBy: publishedAt_DESC) {
    body
    createdAt
    title
    id
    slug
    updatedAt
    heroImage {
      url
      width
      height
    }
  }
}
`

// export async function getStaticProps() {
//   const { posts }: any = await hygraph.request(AllPosts)
//   console.log("🚀 ~ getStaticProps ~ posts:", posts)

//   return {
//     props: {
//       ssd: posts,
//     }
//   }
// }

export const getStaticProps = async () => {
  const allPosts = await fetch(import.meta.env.HYGRAPH_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": `application/json; charset="UTF-8`,
        Authorization: `Bearer ${import.meta.env.HYGRAPH_TOKEN}`, // "Authorization"
      },
      body: JSON.stringify({
        query: AllPosts,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    console.log('allposts', allPosts);
    const posts = allPosts.data.blogPosts;
    console.log('posts', posts);
    return {
      props: {
        ssd: posts,
      },
    };
}