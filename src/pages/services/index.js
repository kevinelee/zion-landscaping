import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Link from "gatsby-link"
// import GridGallery from "../../components/services-page/index";
import React from "react";

function ServicesPage() {
    const services = [
        {
            title: 'Design & Construction',
            href: 'design-and-construction',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
            title: 'Patio',
            href: 'patio',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
            title: 'Front Yard',
            href: 'front-yard',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
            title: 'Driveway',
            href: 'driveway',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
            title: 'Fire Place',
            href: 'fire-place',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
            title: 'Patio Cover',
            href: 'patio-cover',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
            title: 'Putting Green',
            href: 'putting-green',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
            title: 'Barbeque',
            href: 'barbeque',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
            title: 'Fire Place',
            href: 'fire-place',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
            title: 'Pool Deck',
            href: 'pool-deck',
            description:
                'Get a complimentary 3D design consultation so you can visualize how beautiful your home will look after the finised project.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        },
        {
            title: 'Fountain',
            href: 'fountain',
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
                <div className="relative bg-gray-50 pt-16 pb-20 lg:pt-24 lg:pb-28">
                    <div className="absolute inset-0">
                        <div className="bg-white h-1/3 sm:h-2/3"/>
                    </div>
                    <div className="relative max-w-7xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Services We
                                offer</h2>
                        </div>
                        <div className="mt-12 max-w-lg mx-auto grid gap-x-7 gap-y-10 lg:grid-cols-3 lg:max-w-none">
                            {services.map((service) => (
                                <div key={service.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                    <div className="flex-shrink-0">
                                        <img className="h-64 w-full object-cover" src={service.imageUrl} alt=""/>
                                    </div>
                                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <Link
                                                className="block"
                                                to={service.href}
                                            >
                                                <p className="text-xl font-semibold text-center text-gray-900">{service.title}</p>
                                                <p className="mt-3 text-base text-center text-gray-500">{service.description}</p>
                                            </Link>
                                        </div>
                                    </div>
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
