import { useState, useEffect } from "preact/hooks";
import { FunctionalComponent } from "preact";

import { gql } from "graphql-request";

import "../app.css";

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";

const SinglePost = gql`
  query SinglePost($slug: String!) {
    blogPost(where: { slug: $slug }) {
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

type PostProps = {
  slug: string;
};

export const Post: FunctionalComponent<PostProps> = ({ slug }) => {
  const [data, setData] = useState<null | Post>(null);
  const apiUrl = `${import.meta.env.VITE_HYGRAPH_FAST_ENDPOINT}`;

  useEffect(() => {
    const fetchData = async (slug: any) => {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: SinglePost,
            variables: { slug: slug },
          }),
        });

        const result = await response.json();
        setData(result.data.blogPost);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(slug);
  }, []);

  return (
    <div className="flex flex-col">
      <Header />

{data ? (        <div className="align-items-center mb-6 flex flex-col">
          <div className="flex flex-col gap-4">
            <div className="card flex min-w-full flex-col items-center justify-around gap-3 rounded-xl border-2 border-transparent p-2">
              <div className="flex min-w-full justify-around">
                <h1 className="mb-2 text-xl font-black">{data.title}</h1>
                <p className="justify-self-end italic">
                  {new Date(data.createdAt).toLocaleDateString("en-gb", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              {data.heroImage ? (
                <>
                  <img
                    src={data.heroImage.url}
                    alt={data.title}
                    className="w-30 h-20"
                  />
                </>
              ) : null}
              <p>{data.body}</p>
            </div>
          </div>
        </div>): null}

      <Footer />
    </div>
  );
};
