import Link from "next/link";

export const MDXComponents = {
  h1: (props: any) => <h1 {...props} />,
  h2: (props: any) => (
    <h2 className="mt-3 mb-4 text-3xl font-bold" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="mt-3 mb-4 text-2xl font-bold" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="mt-3 mb-4 text-1xl font-bold" {...props} />
  ),
  p: (props: any) => <p className="font-light" {...props} />,
  strong: (props: any) => <strong className="font-extrabold" {...props} />,
  a: (props: any) => {
    return (
      <Link
        className="underline pointer hover:text-primary italic"
        href={props.href}
      >
        <a target="_blank" className="underline pointer text-primary italic">
          {props.children}
        </a>
      </Link>
    );
  },
};
