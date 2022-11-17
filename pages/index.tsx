import type { NextPage } from "next";
import Head from "next/head";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { allPosts } from "contentlayer/generated";
import { pick } from "@contentlayer/client";

import { PostCard, SocialLinks } from "components";

const Home: NextPage = ({ posts }: any) => {
  return (
    <div>
      <Head>
        <title>Gaspar Dolcemascolo</title>
        <meta
          name="description"
          content="Gaspar Dolcemascolo - Mobile / Web developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1 className="font-bold text-4xl">Gaspar Dolcemascolo</h1>
        <h2 className="my-4">
          Mobile / Web Developer at{" "}
          <a
            className="hover:text-primary underline"
            target="_blank"
            href="https://www.cleveritgroup.com/"
            rel="noreferrer"
          >
            CleverIt Group
          </a>
        </h2>
        <SocialLinks />
        <p>
          I am a fullstack developer focus in frontend and mobile. My main stack
          is React.js, React Native, Next.js, GraphQL, Nest.js, Tailwindcss...
        </p>
        <p>
          I love learning new things that can improve my work and the product we
          build.
        </p>
      </section>

      <section className="mt-8">
        <ol>
          {posts?.map((p: any) => (
            <li key={p}>
              <PostCard slug={p.slug} title={p.title} description={p.date} />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const posts = allPosts.map((post) => pick(post, ["title", "date", "slug"]));

  return { props: { posts } };
}

export default Home;
