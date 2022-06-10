import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <section className="md:mt-24">
        <h1 className="text-5xl text-gray-100 font-bold">
          Hey there. I'm Gaspar Dolcemascolo
        </h1>
        <h2 className="text-4xl text-customGray mt-8">
          FrontEnd Developer at{" "}
          <a
            className="text-customGray bg-hover px-1 rounded-lg"
            target="_blank"
            href="https://www.cleveritgroup.com/"
          >
            CleverIt Group
          </a>
        </h2>
        <div className="flex gap-4 align-self-start mt-8">
          <a target="_blank" href="https://github.com/gasparnd">
            <FaGithub size="1.7rem" color="#888888" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/gaspardolcemascolo/"
          >
            <FaLinkedin size="1.7rem" color="#888888" />
          </a>
          <a target="_blank" href="https://twitter.com/gasparnd">
            <FaTwitterSquare size="1.7rem" color="#888888" />
          </a>
        </div>
        <div className="mt-16 flex">
          <div>
            <p className="text-lg text-gray-100">
              <br /> I have been developing for the modern web since 2020. I
              focus in Web technologies like React, Next, React Native and
              GraphQL.
              <br />
              Not only work in FrontEnd, i have knowloge in BackEnd with{" "}
              <span className="text-gray-50">
                Node.Js, NestJs, Express and starting to learn Cyber Security in
                my free time
              </span>
              . Currently i work as FrontEnd dev at{" "}
              <a
                className="underline "
                target="_blank"
                href="https://www.cleveritgroup.com/"
              >
                CleverIt Group
              </a>
              , in the Labs department, where we build experiments, own products
              and StartUps. Also i work for the clients area.
            </p>
          </div>

          <div></div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
