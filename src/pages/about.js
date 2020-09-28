import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Body from "../components/about-us-page/body";
import Landscapers from "../components/about-us-page/landscapers/index";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="max-w-7xl mx-auto">
        <Body />
        <Landscapers/>
      </section>
    </Layout>
  );
}

export default AboutPage;
