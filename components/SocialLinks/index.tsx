import React, { FC } from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export const SocialLinks: FC = () => {
  return (
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
  );
};
