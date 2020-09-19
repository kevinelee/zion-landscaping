import React from "react";

function AboutUs() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            About Our Company
          </h1>
        </div>
        {/* <div className="relative z-10 text-base max-w-prose mx-auto mb-8 lg:max-w-5xl lg:mx-0 lg:pr-72">
          <p className="text-lg text-gray-500 leading-7">
            The Landscaper is a full-service landscaping company with a
            straightforward and unique design/build philosophy. We believe in
            having one landscape designer handle the job from its conception on
            paper, to the realization on your property. The reason; by doing
            this you are able to communicate and work with a single individual,
            where you can share your thoughts and idea&apo;s with to bring them,
            in collaboration, to life.
          </p>
        </div> */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10 mb-12 lg:mb-0">
            <div className="mb-10 prose text-gray-500 mx-auto lg:max-w-none">
              <p>
                The Landscaper is made up of a group of highly skilled
                landscaping professionals who pays a lot of attention to small
                details. In the 30+ years of experience our staff keep your
                property looking and functioning beautifully. Our landscapers
                are fully licensed
              </p>
              <ul>
                <li>We like gardening.</li>
                <li>We like helping.</li>
                <li>We are family.</li>
              </ul>
              <p>
                The reason; by doing this you are able to communicate and work
                with a single individual, where you can share your thoughts and
                idea&apo;s with to bring them, in collaboration...
              </p>
              <h2>We’re here to help</h2>
              <p>We want to make your dreams come true. All. Your. Dreams.</p>
            </div>
            <div className="flex text-base max-w-prose mx-auto lg:max-w-none">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out"
                >
                  Contact sales
                </a>
              </div>
              <div className="rounded-md shadow ml-4">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

          <div className="relative text-base max-w-prose mx-auto lg:max-w-none">
            <div className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-1 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 text-center md:text-3xl">
                    Request an estimate!
                  </h3>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          id="first_name"
                          className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          id="last_name"
                          className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email_address"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          id="email_address"
                          className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email_address"
                          className="block text-sm font-medium leading-5 text-gray-700"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="text_area"
                          className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
