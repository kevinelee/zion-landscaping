import React from "react";
import Dots from "./Svg/Dots";
import GlobeIcon from "./Svg/GlobeIcon";
import ScaleIcon from "./Svg/ScaleIcon";
import LightningIcon from "./Svg/LightningIcon";
import MessageIcon from "./Svg/MessageIcon";
import ClipboardIcon from "./Svg/ClipboardIcon";
import CalendarIcon from "./Svg/CalendarIcon";

const Skills = ({ iconSvg, title, paragraph }) => {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
        {iconSvg}
      </div>
      <div className="mt-5">
        <h4 className="text-lg leading-6 font-medium text-gray-900">{title}</h4>
        <p className="mt-2 text-base leading-6 text-gray-400">{paragraph}</p>
      </div>
    </div>
  );
};

function twoByTwo() {
  return (
    <div className="overflow-hidden  px-4 lg:px-2">
      <div className="relative max-w-screen-xl mx-auto py-8">
        <Dots />

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Why choose us?
            </h3>
          </div>

          <div className="mt-10 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:col-span-2">
            <Skills
              iconSvg={<GlobeIcon />}
              title="Innovative Landscape Design"
              paragraph="We are a landscaping company that specializes in residential
                  and commercial landscaping"
            />

            <Skills
              iconSvg={<ScaleIcon />}
              title="Licensed & Insured"
              paragraph="All our landscapers are fully licensed, bonded and insured for their safety"
            />

            <Skills
              iconSvg={<LightningIcon />}
              title="Dependable Services"
              paragraph="We love to take pride in the work we do. Each project is finished in time and budget"
            />

            <Skills
              iconSvg={<CalendarIcon />}
              title="Day Scheduling"
              paragraph="We schedule regular appointments to visit your property on the same day and time of the week"
            />

            <Skills
              iconSvg={<MessageIcon />}
              title="Free Consultations"
              paragraph="We offer free consultations for our services, and will provide
                  you with an actual quote"
            />

            <Skills
              iconSvg={<ClipboardIcon />}
              title="Reputable Company"
              paragraph=" Operating for more than 30 years, earning a repuation for service and beautiful work"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default twoByTwo;
