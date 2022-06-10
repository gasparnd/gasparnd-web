import Head from "next/head";
import React from "react";

interface IProps {
  title: string;
  children: React.ReactNode;
  description: string;
}

const Layout = (props: IProps) => {
  const { title, children, description } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Head>
        <meta content={description} />
      </Head>
      <div className="p-3 flex justify-center w-full min-h-screen bg-background antialiased">
        <div className="md:w-3/4">{children}</div>
      </div>
    </>
  );
};

export default Layout;
