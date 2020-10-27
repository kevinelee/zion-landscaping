import { Transition } from "@headlessui/react";
import React, { useState } from "react";

export default function DropDown({children}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="lg:hidden text-5xl" onClick={() => setIsOpen(!isOpen)}>Services</button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {children}
      </Transition>

      
    </div>
  );
}
