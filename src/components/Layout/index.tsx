import Head from "next/head";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  description: string;
}

const Layout = (props: Props) => {
  const { title, children, description } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Head>
        <meta content={description} />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
