
/* eslint react/prop-types: 0 */
import React from "react";
import StatCounter from './stat-counter'
import { useInView } from "react-intersection-observer";

export default function Stats() {

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });


  return (
    <section>
      <div ref={ref}>
        <div className="my-5 grid grid-cols-2 gap-5  lg:grid-cols-4">
          {inView 
            ? (
              <>
                <StatCounter label={"Gardens Yeeted"} end={80} />
                <StatCounter label={"Satisfied Clients"} end={400} />
                <StatCounter label={"Homes Remodeled"} end={1000} />
                <StatCounter label={"Great Landscapers"} end={3000} />
              </>
            ) 
            : null
          } 
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}