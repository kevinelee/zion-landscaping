import Layout from "../components/layout";
import SEO from "../components/seo";
import GridGallery from "../components/services-page/index";
import React from "react";

function ServicesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />

      <section className="px-4 lg:px-2 py-8 ">
        <GridGallery />
      </section>
    </Layout>
  );
}

export default ServicesPage;
