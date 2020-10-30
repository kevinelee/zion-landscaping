import * as React from "react";
import { Menu, Transition } from "@headlessui/react";
import ChevronIcon from "./Svg/ChevronIcon";

export default function DropDown(props) {
  return (
    <div className="flex items-center justify-center lg:hidden">
      <div className="relative inline-block text-left">
        <Menu>
          {({ open }) => (
            <>
              <span className="rounded-md shadow-sm">
                <Menu.Button className="inline-flex justify-center w-full px-6 py-4 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border-2 border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                  <span className="text-3xl">Services</span>
                  <ChevronIcon />
                </Menu.Button>
              </span>

              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none z-50"
                >
                  <div className="py-1">
                    {props.services.map((svc) => {
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#license"
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>;
                      return <MenuItem key={svc.props.value} service={svc} />;
                    })}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
}

const MenuItem = ({ service }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <div
          className={`${
            active ? "bg-gray-100 text-gray-900" : "text-gray-700"
          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
        >
          {service}
        </div>
      )}
    </Menu.Item>
  );
};
