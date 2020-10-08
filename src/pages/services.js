import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import GridGallery from "../components/cloudinary"

function ServicesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className="px-4 py-8">
        <GridGallery/>
      </section>
    </Layout>
  );
}

export default ServicesPage;
