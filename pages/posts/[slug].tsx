import { allPosts } from "contentlayer/generated";

export default function Post({ post }: any) {
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.date}</div>

      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
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
  const post = allPosts.find((post) => post.slug === params?.slug);

  return { props: { post } };
}
