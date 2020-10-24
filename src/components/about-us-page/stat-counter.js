/* eslint react/prop-types: 0 */
import React from 'react'
import {useCountUp} from "react-countup";

export default function StatCounter({label, end}) {
    const { countUp } = useCountUp({ 
      end,
    });
  
    return (
      <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 w-0 flex-1">
                    <dl>
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        {label}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl leading-8 font-semibold text-gray-900">
                          {countUp}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
    )
  }