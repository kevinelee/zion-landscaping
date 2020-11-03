import React, { useEffect } from "react";
import { useSelect } from "downshift";
import ChevronIcon from "../Svg/ChevronIcon"

export default function DropdownSelect({ items, setValue, initialValue = "" }) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    // getLabelProps,
    getMenuProps,
    // highlightedIndex,
    getItemProps,
  } = useSelect({ items });

  useEffect(() => {
    if (selectedItem) {
      setValue(selectedItem);
    }
  }, [selectedItem]);

  return (
    <div className="lg:hidden flex flex-col mb-2 w-1/2 md:w-1/4">
      {/* <label {...getLabelProps()}>Choose an element:</label> */}
      <button className="text-green-500 px-6 py-2 flex flex-row" type="button" {...getToggleButtonProps()}>
        {selectedItem || initialValue} 
        <ChevronIcon/>
      </button>
      <ul className="absolute bg-white z-50 " {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li
              className="px-8 py-1"
              // style={
              //   highlightedIndex === index ? { backgroundColor: "#bde4ff", color: "#48bb78" } : {}
              // }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </ul>
      {/* if you Tab from menu, focus goes on button, and it shouldn't. only happens here. */}
      <div tabIndex="0" />
    </div>
  );
}
