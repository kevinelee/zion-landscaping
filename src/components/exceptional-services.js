import React from "react";

// const Service = ({ src, title, paragraph }) => {
//   return (
//     <div className="lg:max-w-sm rounded overflow-hidden mx-2 my-3 lg:mb-0 ">
//       <img className="w-full" src={src} alt="Sunset in the mountains" />
//       <div className="px-6 py-4 border-gray-200 border-b-4 border-l-4 border-r-4 rounded-md">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base">{paragraph}</p>
//       </div>
//     </div>
//   );
// };

const Service = ({ src, alt, service, detail }) => {
  return (
    <>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={src} alt={alt} />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <a href="#" className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {service}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500">{detail}</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default function ExceptionalService() {
  return (
    <section className=" bg-gray-50 px-2">
      <div className="max-w-screen-xl flex flex-col lg:flex-row justify-center py-8 mx-auto">
        <div className="lg:max-w-sm rounded-md overflow-hidden mx-2 border-4 border-gray-200 ">
          <div className="px-6 py-4 text-3xl">
            <h1 className="border-b">
              Exceptional
              <br />
              <span className="text-green-500 font-semibold">
                Services We Offer
              </span>
            </h1>
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl m-2">Lawn & Garden Care</div>
            <p className="text-gray-700 text-base">
              We provide exceptional landscaping services to a wide range of
              commercial and residential properties for over 35 years, including
              large corporate environments, city parks, shopping malls and
              apartments. Our experienced landscapers set the standard each day
              in landscape design, paving, hardscaping. We will whip your yard
              into shape in no time.
            </p>
          </div>
        </div>

        <div className="grid gap-5 mx-auto lg:grid-cols-3 lg:max-w-none lg:ml-3">
          <Service
            src="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/07/trimming_hedge.jpg"
            alt="grass"
            service="Lawn & Garden Care"
            detail="We understand that your property is a big investment and we want
              our customers to know that we are there for them to help them
              accomplish the dreams that they may have for their property"
          />

          <Service
            src="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/07/tree_removal.jpg"
            alt="tree cutting"
            service="Planting & Removal"
            detail="While tree removal is the choice of last resort, it is sometimes
              most necessary. Sick trees, trees that uproot sidewalks, cause
              cracks in the foundation, disrupt sewer lines, have sustained..."
          />

          <Service
            src="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/07/irrigation.jpg"
            alt="sprinker"
            service="Irrigation & Drainage"
            detail="Watering your lawn and is the key to preserving its lushness and
              beauty. Whether you are looking for a brand new irrigation system
              to maintain your lawn or the replacement of a sprinkler..."
          />
        </div>

        {/* <Service
          src="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/07/trimming_hedge.jpg"
          alt="grass"
          title="Lawn & Garden Care"
          paragraph="We understand that your property is a big investment and we want
              our customers to know that we are there for them to help them
              accomplish the dreams that they may have for their property"
        />

        <Service
          src="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/07/tree_removal.jpg"
          alt="tree cutting"
          title="Planting & Removal"
          paragraph="While tree removal is the choice of last resort, it is sometimes
              most necessary. Sick trees, trees that uproot sidewalks, cause
              cracks in the foundation, disrupt sewer lines, have sustained..."
        />

        <Service
          src="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/07/irrigation.jpg"
          alt="sprinker"
          title="Irrigation & Drainage"
          paragraph="Watering your lawn and is the key to preserving its lushness and
              beauty. Whether you are looking for a brand new irrigation system
              to maintain your lawn or the replacement of a sprinkler..."
        /> */}
      </div>
    </section>
  );
}
