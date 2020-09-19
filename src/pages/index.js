import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TwoByTwo from "../components/two-by-two";
// import BetterCarousel from "../components/better-carousel";
import AboutUs from "../components/about-us";
import Carousel from "../components/carousel";
import ExceptionalService from "../components/exceptional-services";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

        <Carousel />

      <AboutUs />
      <TwoByTwo />
      <ExceptionalService/>
    </Layout>
  );
}

export default IndexPage;
