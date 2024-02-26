import { useState, useEffect } from "preact/hooks";
// import { Link } from "preact-router"

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

      <h1>This is the blog page with a bunch of posts</h1>
      
      <div>
        <h1>Your CMS Data</h1>
        <ul>
          {data.map((post: Post) => (
            <li>
              <p>{post.title}</p>
              <p>{post.id}</p>
              <p>{post.slug}</p>
              <p>{post.createdAt}</p>
              <p>{post.body}</p>
              <p>{post.heroImage.url}</p>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}
