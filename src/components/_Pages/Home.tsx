import React from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <section className="md:mt-24">
        <h1 className="font-poppins text-5xl text-gray-100 font-bold">
          Hey there. I'm Gaspar Dolcemascolo
          <br />
          <span className="font-poppins text-4xl text-customGray mt-8">
            FrontEnd / Mobile Developer at{" "}
            <a
              className="font-poppins whitespace-nowrap text-customGray bg-hover px-1 rounded-lg"
              target="_blank"
              href="https://www.cleveritgroup.com/"
            >
              CleverIt Group
            </a>
          </span>
        </h1>

        <div className="flex gap-4 align-self-start mt-8">
          <a
            className="p-1 bg-hover rounded-lg"
            target="_blank"
            href="https://github.com/gasparnd"
          >
            <FaGithub size="1.7rem" color="#888888" />
          </a>
          <a
            className="p-1 bg-hover rounded-lg"
            target="_blank"
            href="https://www.linkedin.com/in/gaspardolcemascolo/"
          >
            <FaLinkedin size="1.7rem" color="#888888" />
          </a>
          <a
            className="p-1 bg-hover rounded-lg"
            target="_blank"
            href="https://twitter.com/gasparnd"
          >
            <FaTwitterSquare size="1.7rem" color="#888888" />
          </a>
        </div>
        <div className="mt-16 flex">
          <div>
            <p className="font-poppins text-lg text-gray-100">
              <br /> I have been developing for the modern web since 2020. I
              Focus in Web technologies like React.js, Next.js, GraphQL and the
              mobile develop with React Native 💙.
              <br />
              Not only work in FrontEnd, i have knowloge in BackEnd with
              Node.js, Nest.js, Express and JWT.
              <br />
              Always i try to go further and further learning about how to build
              a better product for the users and code for the developers (team
              playing is better).
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
