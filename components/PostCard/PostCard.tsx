import React, { FC } from "react";
import Link from "next/link";

interface IPostCardProps {
  title: string;
  description: string;
  slug: string;
}

const PostCard: FC<IPostCardProps> = ({ title, description, slug }) => {
  return (
    <article className="border-2 border-border rounded-lg p-4 mb-4 w-max">
      <Link href={`/posts/${slug}`}>
        <a>
          <h3>{title}</h3>
          <p>{description}</p>
        </a>
      </Link>
    </article>
  );
};

export default PostCard;
