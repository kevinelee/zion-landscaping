import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import ReactCarousel from "../components/react-carousel";
// import ExceptionalService from "../components/exceptional-services";
import WhyChooseUs from "../components/why-choose-us";
import Banner from "../components/banner";
import Testimonials from "../components/testimonials";
import {ParallaxBanner} from "react-scroll-parallax";
// import Hero from "../components/hero";
// import Button from "../components/Button";
// import Hours from "../components/hours";

function IndexPage() {
    return (
        <Layout>
            <SEO
                keywords={[`zion`, `landscaping`, `los Angeles`, `orange county`]}
                title="Zion Landscaping | Home"
            />
            <div className="max-w-7xl mx-auto">
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
                    <div
                        className="font-bold top-0 left-0 right-0 bottom-0 flex-col flex items-center justify-center absolute text-3xl lg:text-6xl text-white">
                        <div>Professional Landscape</div>
                        <div>Design & Construction</div>
                    </div>

                </ParallaxBanner>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="relative pt-16 pb-16 overflow-hidden">
                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48"/>
                    <div className="relative">
                        <div
                            className="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                                <div>
                                    <div>

                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            We Are Zion Landscaping
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            We transform any imagination into a vision through our design and
                                            consultation. With our expertise and experience we will make that vision
                                            into an unparalleled paradise. Contact us to start envisioning your dream
                                            home!
                                        </p>
                                        <div className="mt-6">
                                            <a
                                                href="#"
                                                className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-400 hover:bg-green-50 hover:text-green-400 hover:border-green-400"
                                            >
                                                Get a free estimate
                                            </a>
                                        </div>
                                        <div className="mt-6">
                                            <a
                                                href="#"
                                                className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-green-400 bg-white hover:bg-green-400 hover:text-white border-green-400"
                                            >
                                                More about us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="-mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <WhyChooseUs/>
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
                        height: '100%',
                    }}
                >
                    <div
                        className="top-0 left-0 right-0 bottom-0 flex-col flex items-center justify-center absolute text-3xl lg:text-6xl text-white">
                        <a
                            href="#"
                            className="text-xl inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-400 hover:bg-green-50 hover:text-green-400 hover:border-green-400"
                        >
                            Get a free estimate
                        </a>
                    </div>

                </ParallaxBanner>
            </Banner>
            {/*<ExceptionalService />*/}
            <Testimonials/>
            {/* <Hours/> */}
        </Layout>
    );
}

export default IndexPage;
