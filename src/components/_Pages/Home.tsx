import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const HomePage = () => {
  const [longDescription, setLongDescription] = useState<boolean>(false);
  return (
    <div className="p-3 bg-gray-50 h-screen flex items-center flex-col justify-center">
      <section className="">
        <button
          onClick={() => setLongDescription(!longDescription)}
          className="bg-primary text-gray-50 rounded-md px-3 mb-3"
        >
          Long description
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
      {longDescription && <div>sadasd</div>}
      <section className="flex mt-8">
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
  );
};

export default HomePage;
