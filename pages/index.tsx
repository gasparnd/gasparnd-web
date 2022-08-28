import type { NextPage } from 'next'
import Head from 'next/head'
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const Home: NextPage = () => {
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
      <h1 className="font-bold text-4xl">Gaspar Dolcemascolo</h1>
      <h2 className="my-4">
        Mobile / Web Developer at{" "}
        <a
          className="hover:text-green"
          target="_blank"
          href="https://www.cleveritgroup.com/"
          rel="noreferrer"
        >
          CleverIt Group
        </a>
      </h2>
      <p>
        I am a fullstack developer focus in frontend and mobile. My main stack
        is React.js, React Native, Next.js, GraphQL, Nest.js...
      </p>
      <p>
        I love learning new thing that can improve my work and the product we
        build.
      </p>
      <div className="flex gap-6 mt-4">
        <a
          target="_blank"
          href="https://www.github.com/gasparnd"
          rel="noreferrer"
          className="transition duration-700 hover:scale-125 hover:skew-y-3"
        >
          <BsGithub size={30} />
        </a>
        <a
          target="_blank"
          href="https://www.twitter.com/gasparnd"
          rel="noreferrer"
          className="transition duration-700 hover:scale-125 hover:skew-y-3"
        >
          <BsTwitter size={30} />
        </a>
        <a
          target="_blank"
          href="https://www.twitter.com/gasparnd"
          rel="noreferrer"
          className="transition duration-700 hover:scale-125 hover:skew-y-3"
        >
          <BsLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};



export default Home
