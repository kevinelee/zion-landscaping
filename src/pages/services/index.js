import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Link from "gatsby-link"
import { GatsbyImage } from "gatsby-plugin-image"
// import GridGallery from "../../components/services-page/index";
import React from "react";

function ServicesPage() {
    const services = [
        {
            title: 'Hardscapes',
            href: 'hardscapes',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
            title: 'Softscapes',
            href: 'softscapes',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
            title: 'Barbeques',
            href: 'barbeques',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
                '../images/bbq',
        },
        {
            title: 'Custom Installations',
            href: 'custom-installations',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },

    ]
    return (
        <Layout>
            <SEO
                keywords={[`landscaping`, 'services', 'orange county', 'los angeles']}
                title="Landscaping services we offer"
            />
            <div className="max-w-7xl mx-auto">
                <div className="relative pt-16 pb-20 lg:pt-24 lg:pb-28">
                    <div className="relative max-w-7xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Services We
                                offer</h2>
                        </div>
                        <div className="mt-12 max-w-lg mx-auto grid gap-x-7 gap-y-10 lg:grid-cols-3 lg:max-w-none">
                            {services.map((service) => (
                                <div key={service.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                    <Link
                                        className="block"
                                        to={service.href}
                                    >
                                        <div className="flex-shrink-0">

                                            <GatsbyImage className="h-64 w-full object-cover" src={service.imageUrl} alt="A dinosaur" />
                                        </div>
                                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                            <div className="flex-1">

                                                <p className="text-xl font-semibold text-center text-gray-900">{service.title}</p>
                                                <p className="mt-3 text-base text-center text-gray-500">{service.description}</p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/*<section>*/}
            {/*    <GridGallery />*/}
            {/*</section>*/}
        </Layout>
    );
}

export default ServicesPage;
