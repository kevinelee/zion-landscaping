import React, { useEffect } from "react";
import { useSelect } from "downshift";

export default function DropdownSelect({ items, setValue, initialValue = "" }) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    // getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items });

  useEffect(() => {
    if (selectedItem) {
      setValue(selectedItem);
    }
  }, [selectedItem]);

  return (
    <div className="lg:hidden flex flex-col items-center">
      {/* <label {...getLabelProps()}>Choose an element:</label> */}
      <button className="text-green-500" type="button" {...getToggleButtonProps()}>
        {selectedItem || initialValue}
      </button>
      <ul {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li
              className="px-8"
              style={
                highlightedIndex === index ? { backgroundColor: "#bde4ff", color: "#48bb78" } : {}
              }
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
