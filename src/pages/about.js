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
        keywords={[`zion`, `landscaping`]}
        title="About Zion Landscaping"
      />
      <img
        className="object-contain lg:hidden flex"
        src="https://www.houselogic.com/wp-content/uploads/2010/03/landscape-curb-appeal-retina_retina_f09021ca6edac80b70f3a5b5092c4059.jpg"
        alt="landscaping"
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-2">
        <Body />
        <Landscapers />
        <Stats />
      </div>
    </Layout>
  );
}

export default AboutPage;
