import Head from "next/head";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const { title, children } = props;
  return (
    <div>
      <Head>
        <title>GasparND - {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
