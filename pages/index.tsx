import type { NextPage } from "next";
import Head from "next/head";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { allPosts } from "contentlayer/generated";
import { pick } from "@contentlayer/client";

import { PostCard } from "components";

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
        <div className="flex gap-6 my-4">
          <a
            target="_blank"
            href="https://www.github.com/gasparnd"
            rel="noreferrer"
            className="transition text-primary duration-700 hover:scale-125 hover:skew-y-3"
          >
            <BsGithub size={25} />
          </a>
          <a
            target="_blank"
            href="https://www.twitter.com/gasparnd"
            rel="noreferrer"
            className="transition text-primary duration-700 hover:scale-125 hover:skew-y-3"
          >
            <BsTwitter size={25} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/gaspardolcemascolo/"
            rel="noreferrer"
            className="transition text-primary duration-700 hover:scale-125 hover:skew-y-3"
          >
            <BsLinkedin size={25} />
          </a>
        </div>
        <p>
          I am a fullstack developer focus in frontend and mobile. My main stack
          is React.js, React Native, Next.js, GraphQL, Nest.js...
        </p>
        <p>
          I love learning new thing that can improve my work and the product we
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
