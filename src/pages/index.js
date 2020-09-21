import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import BetterCarousel from "../components/better-carousel";
import AboutUs from "../components/about-us";
import Carousel from "../components/carousel";
import ExceptionalService from "../components/exceptional-services";
import WhyChooseUs from "../components/why-choose-us";
import AreYouTired from "../components/are-you-tired";
import Testimonials from "../components/testimonials"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Carousel />
      <AboutUs />
      <WhyChooseUs />
      <AreYouTired />
      <ExceptionalService />
      <Testimonials/>
    </Layout>
  );
}

export default IndexPage;
