import Layout from "../components/layout";
import SEO from "../components/seo";
import GridGallery from "../components/services-page/index";
import React from "react";
import Banner from "../components/banner";
import Hero from "../components/hero";

function ServicesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />

      <section>
        <Banner height="h-48">
          <div className="green-banner w-screen"></div>
          <Hero
            firstLine="testing"
            secondLine="banner"
            color="text-gray-700"
            margin="mt-0"
          ></Hero>
        </Banner>
        <GridGallery />
      </section>
    </Layout>
  );
}

export default ServicesPage;
