import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="homepage">
      <h1>My first website!</h1>
      <h2>I am using Gatsby JS!</h2>
      <p>
        I will now begin to follow the tutorial on the main site and then try
        out tailwind css
      </p>
      <Link to="/about">
        <button>About page</button>
      </Link>
    </Layout>
  );
};

export default IndexPage;
