import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Body from "../components/about-us-page/body";
import Landscapers from "../components/about-us-page/landscapers/index";
import Stats from "../components/about-us-page/stats";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="max-w-7xl mx-auto px-4 md:px-0">
        <Stats />
        <Body />
        <Landscapers />
      </section>
    </Layout>
  );
}

export default AboutPage;
