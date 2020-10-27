import React from "react";
import Dots from "./Svg/Dots";
import GlobeIcon from "./Svg/GlobeIcon";
import ScaleIcon from "./Svg/ScaleIcon";
import LightningIcon from "./Svg/LightningIcon";
import MessageIcon from "./Svg/MessageIcon";
import ClipboardIcon from "./Svg/ClipboardIcon";
import CalendarIcon from "./Svg/CalendarIcon";

function twoByTwo() {
  return (
    <div className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto py-12 px-6">
        <Dots />

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Why choose us?
            </h3>
          </div>

          <div className="mt-10 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:col-span-2">
            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                <GlobeIcon />
              </div>
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Specialized Company
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-400">
                  We are a landscaping company that specializes in residential
                  and commercial landscaping
                </p>
              </div>
            </div>

            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                <ScaleIcon />
              </div>
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Licensed & Insured
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-400">
                  All our landscapers are fully licensed, bonded and insured for
                  their safety
                </p>
              </div>
            </div>

            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                <LightningIcon />
              </div>
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Dependable Services
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-400">
                  We love to take pride in the work we do. Each project is
                  finished in time and budget
                </p>
              </div>
            </div>

            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                <CalendarIcon />
              </div>
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Day Scheduling
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-400">
                  We schedule regular appointments to visit your property on the
                  same day and time of the week
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
              <MessageIcon />
            </div>
            <div className="mt-5">
              <h4 className="text-lg leading-6 font-medium text-gray-900">
                Free Consultations
              </h4>
              <p className="mt-2 text-base leading-6 text-gray-400">
                We offer free consultations for our services, and will provide
                you with an actual quote
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
              <ClipboardIcon />
            </div>
            <div className="mt-5">
              <h4 className="text-lg leading-6 font-medium text-gray-900">
                Reputable Company
              </h4>
              <p className="mt-2 text-base leading-6 text-gray-400">
                Operating for more than 30 years, earning a repuation for
                service and beautiful work
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default twoByTwo;
