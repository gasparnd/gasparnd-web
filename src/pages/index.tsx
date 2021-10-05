import React from "react";
import Layout from "../components/Layout";
import HomePage from "../components/_Pages/Home";

const Home = () => {
  return (
    <Layout
      title="Gaspar Dolcemascolo"
      description="Gaspar Dolcemascolo. FrontEnd developer at CleverIt Group"
    >
      <HomePage />
    </Layout>
  );
};

export default Home;
