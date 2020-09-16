import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <div className="bg-gray-100">
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                  Simple no-tricks pricing
                </h2>
                <p className="mt-4 text-xl leading-7 text-gray-600">
                  {`If you're not satisfied, contact us within the first 14 days
                  and we'll send you a full refund.`}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-100"></div>
              <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                  <div className="bg-white px-6 py-8 lg:p-12">
                    <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
                      Lifetime Membership
                    </h3>
                    <p className="mt-6 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consect etur adipisicing elit.
                      Itaque amet indis perferendis blanditiis repellendus etur
                      quidem assumenda.
                    </p>
                    <div className="mt-8">
                      <div className="flex items-center">
                        <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                          {`What's included`}
                        </h4>
                        <div className="flex-1 border-t-2 border-gray-200"></div>
                      </div>
                      <ul className="mt-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                        <li className="flex items-start lg:col-span-1">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-green-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-sm leading-5 text-gray-700">
                            Private forum access
                          </p>
                        </li>
                        <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-green-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-sm leading-5 text-gray-700">
                            Member resources
                          </p>
                        </li>
                        <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-green-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-sm leading-5 text-gray-700">
                            Entry to annual conference
                          </p>
                        </li>
                        <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-green-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-sm leading-5 text-gray-700">
                            Official member t-shirt
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg leading-6 font-medium text-gray-900">
                      Pay once, own it forever
                    </p>
                    <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900">
                      <span>$349</span>
                      <span className="ml-3 text-xl leading-7 font-medium text-gray-500">
                        USD
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-5">
                      <a
                        href="#"
                        className="font-medium text-gray-500 underline"
                      >
                        Learn about our membership policy
                      </a>
                    </p>
                    <div className="mt-6">
                      <div className="rounded-md shadow">
                        <a
                          href="#"
                          className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                        >
                          Get Access
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 text-sm leading-5">
                      <a href="#" className="font-medium text-gray-900">
                        Get a free sample
                        <span className="font-normal text-gray-500">
                          (20MB)
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
