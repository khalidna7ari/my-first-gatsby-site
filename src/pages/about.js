import React from "react";

import { Link } from "gatsby";

import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <h1>About me page</h1>
      <p>
        Hi there! This is my new website. My name is Khalid and I built this on
        Gatsby. Not the great gatsby.
      </p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </Layout>
  );
};

export default AboutPage;
