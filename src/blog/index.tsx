import { useState, useEffect } from "preact/hooks";
import { Link } from "preact-router";

import { gql } from "graphql-request";

import "../app.css";

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";

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
`;

interface HeroImage {
  url: string;
  width: number;
  height: number;
}

interface Post {
  body: string;
  createdAt: string;
  title: string;
  id: string;
  slug: string;
  updatedAt: string;
  heroImage: HeroImage;
}

export function Blog() {
  const [data, setData] = useState([]);
  const apiUrl = `${import.meta.env.VITE_HYGRAPH_FAST_ENDPOINT}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: AllPosts,
          }),
        });

        const result = await response.json();
        setData(result.data.blogPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <Header />

      <div className="align-items-center mb-6 flex flex-col">
        <h1 className="mb-12 text-5xl font-semibold">Blog</h1>
        <div className="flex flex-col gap-4">
          {data && data.map((post: Post) => (
            <Link href={`/blog/${post.slug}`}>
              <div className="card flex min-w-full items-center justify-between gap-3 rounded-xl border-2 border-transparent p-2">
                {/* {post.heroImage ? (
                <>
                <p className="splashTitle text-3xl font-semibold">
                {post.title}
                </p>
                <img
                src={post.heroImage.url}
                alt={post.title}
                className="cardSplash"
                />
                <img
                src={post.heroImage.url}
                alt={post.title}
                className="w-30 h-20"
                />
                </>
              ) : null} */}
                <h3 className=" justify-self-center text-xl font-semibold">
                  {/* <Link
                  href={`/blog/${post.slug}`}
                  > */}
                  {post.title}
                  {/* </Link> */}
                </h3>
                <p className="justify-self-end italic">
                  {new Date(post.createdAt).toLocaleDateString("en-gb", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
