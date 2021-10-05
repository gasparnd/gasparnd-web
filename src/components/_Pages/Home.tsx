import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const HomePage = () => {
  const [longDescription, setLongDescription] = useState<boolean>(false);
  return (
    <div className="p-3 bg-gray-50 h-screen flex items-center flex-col justify-center">
      <div className="md:w-3/4">
        <section className="">
          <button
            onClick={() => setLongDescription(!longDescription)}
            className="bg-primary text-gray-50 rounded-md px-3 mb-3"
          >
            {longDescription ? "Short description" : "Long description"}
          </button>
          <h1 className="text-5xl font-bold">
            Hey there. I'm Gaspar Dolcemascolo
          </h1>
          <h2 className="text-4xl mt-4">
            FrontEnd Developer at{" "}
            <a
              style={{ color: "#6a35ff" }}
              className="underline"
              target="_blank"
              href="https://www.cleveritgroup.com/"
            >
              ClaverIt Group
            </a>
          </h2>
        </section>
        {longDescription && (
          <div className="mt-4">
            <p className="text-lg">
              Greate, i see you interested in my profile.
              <br /> I have been developing for the modern web since 2020. I
              focus in{" "}
              <span className="bg-primary text-gray-50">
                Web technologies like React, Next, React Native and GraphQL.
              </span>{" "}
              <br />
              Not only work in FrontEnd, i have knowloge in BackEnd with{" "}
              <span className="bg-primary text-gray-50">
                Node.Js, NestJs, Express and Cloud services like Google Cloud
                Platform
              </span>
              . Currently i work as FrontEnd dev at{" "}
              <a
                className="underline"
                target="_blank"
                href="https://www.cleveritgroup.com/"
              >
                ClaverIt Group
              </a>
              , in the Labs department, where we build experiments, own products
              and StartUps. I worked for the clients area also
            </p>
          </div>
        )}
        <section className="flex align-self-start mt-8">
          <a target="_blank" href="https://github.com/gasparnd">
            <FaGithub className="mr-4" size="2rem" color="#6a35ff" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/gaspardolcemascolo/"
          >
            <FaLinkedin className="mr-4" size="2rem" color="#6a35ff" />
          </a>
          <a target="_blank" href="https://twitter.com/gasparnd">
            <FaTwitterSquare className="mr-4" size="2rem" color="#6a35ff" />
          </a>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
