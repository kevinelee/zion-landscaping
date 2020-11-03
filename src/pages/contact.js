import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/form";
import ReactCarousel from "../components/react-carousel";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className="px-4 lg:px-2 py-8">
        <h1 className="text-center mb-6 text-4xl">Contact us!</h1>
        <Form />
        <ReactCarousel />
      </section>
    </Layout>
  );
}

export default ContactPage;
