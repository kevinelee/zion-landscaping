import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner";
import {ParallaxBanner} from "react-scroll-parallax";

function AboutPage() {
    return (
        <Layout>
            <SEO
                keywords={[`zion`, `landscaping`]}
                title="About Zion Landscaping"
            />
            <div className="max-w-7xl mx-auto">
                <div className="relative pt-16 pb-20 lg:py-16">
                    <div className="relative max-w-7xl mx-auto">
                        <div className="text-center flex flex-col items-center">
                            <h2 className="max-w-lg text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                                The OC Landscaping company you can trust
                            </h2>
                            <p className="mt-4 text-lg text-gray-500 max-w-4xl">
                                Zion Landscaping Inc. prides itself in superior workmanship, excellent customer service, and a keen attention to detail. Our mission is to provide industry-leading customer satisfaction and exceptional quality service. Our company is based on the following principle: we cater to our clientele&apos;s visions by offering a wide range of services. We believe frequent communication with our clients is one of the keys to a successful project. We maintain a highly professional staff that understands and responds to customers&apos; needs in a friendly, personal manner. Ultimately, we will constantly strive to have your project completed on time and with minimal inconvenience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Banner height="h-96">
                <ParallaxBanner
                    className="your-class"
                    layers={[
                        {
                            image: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixqx=HUAB3P7Cex&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100',
                            amount: 0.8,
                        },
                    ]}
                    style={{
                        height: '500px',
                    }}
                >
                </ParallaxBanner>
            </Banner>
        </Layout>
    );
}

export default AboutPage;
