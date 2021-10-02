import React from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Home = () => {
  return (
    <section className="bg-gray-50 h-screen flex items-center flex-col justify-center">
      <div className="w-max">
        <h1 className="text-5xl font-bold">Hello, I'm Gaspar Dolcemascolo</h1>
        <h2 className="text-4xl mt-4">
          FrontEnd Developer at{" "}
          <a
            style={{ background: "#6a35ff" }}
            className="text-gray-50"
            target="_blank"
            href="https://www.cleveritgroup.com/"
          >
            ClaverIt Group
          </a>
        </h2>
        <div className="flex mt-8">
          <FaGithub className="mr-4" size="2rem" color="#6a35ff" />
          <FaLinkedin className="mr-4" size="2rem" color="#6a35ff" />
          <FaTwitterSquare className="mr-4" size="2rem" color="#6a35ff" />
        </div>
      </div>
    </section>
  );
};

export default Home;
