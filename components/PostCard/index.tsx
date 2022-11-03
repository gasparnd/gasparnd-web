import React, { FC } from "react";
import Link from "next/link";

interface IPostCardProps {
  title: string;
  description: string;
  slug: string;
}

export const PostCard: FC<IPostCardProps> = ({ title, description, slug }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <article className="group hover:bg-primary hover:[h3]:text-black border-2 border-primary cursor-pointer rounded-lg p-4 mb-4 w-max">
        <a>
          <h3 className="group-hover:text-black">{title}</h3>
          <p className="group-hover:text-black">{description}</p>
        </a>
      </article>
    </Link>
  );
};
