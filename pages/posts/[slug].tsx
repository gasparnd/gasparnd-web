import Head from "next/head";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export default function Post({ post }: any) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <article className="py-8">
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content="Gaspar Dolcemascolo - Mobile / Web developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl mb-3 text-primary">{post.title}</h1>
      <p className="mb-8">{post.date}</p>

      <MDXContent />
    </article>
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
