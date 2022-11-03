import Head from "next/head";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

import { MDXComponents } from "components";

export default function Post({ post }: any) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div className="py-8">
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content="Gaspar Dolcemascolo - Mobile / Web developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="mb-8">
        <div className="max-w-max bg-primary border-primary rounded-lg">
          <Link href="/">
            <a>
              <BsArrowLeftShort className="text-black" size={40} />
            </a>
          </Link>
        </div>
      </header>
      <h1 className="text-3xl mb-3">{post.title}</h1>
      <p className="mb-8 text-primary">{post.date}</p>

      <MDXContent components={{ ...MDXComponents }} />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

// Statically fetch post by slug
export async function getStaticProps({ params }: any) {
  const post = allPosts.find(
    (post) => post._raw.sourceFileName.replace(/\.mdx$/, "") === params?.slug
  );

  return { props: { post } };
}
