import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutUs from "../components/about-us";
import ReactCarousel from "../components/react-carousel";
import ExceptionalService from "../components/exceptional-services";
import WhyChooseUs from "../components/why-choose-us";
import Banner from "../components/banner";
import Testimonials from "../components/testimonials";
import Hero from "../components/hero";
import Button from "../components/Button";
// import Hours from "../components/hours";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <ReactCarousel />
      <AboutUs />
      <WhyChooseUs />
      <Banner>
        <div className="green-banner w-screen"></div>
        <Hero
          firstLine="are you tired"
          secondLine="yes you are"
          color="text-gray-700"
        >
          <div className="inline-flex rounded-md shadow">
            <Button
              text="Get Started"
              extraClasses="inline-flex text-white bg-green-600 hover:bg-green-500 focus:shadow-outline"
            />
          </div>
          <div className="rounded-md shadow ml-4">
            <Button
              text="Learn More"
              extraClasses="w-full flex text-green-600 bg-white hover:text-green-500 focus:outline-none focus:border-green-300 focus:shadow-outline-green"
            />
          </div>
        </Hero>
      </Banner>
      <ExceptionalService />
      <Testimonials />
      {/* <Hours/> */}
    </Layout>
  );
}

export default IndexPage;
