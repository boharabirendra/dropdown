import { clsx } from "clsx";
import { useState } from "react";

import Overlay from "./Overlay";
import DropdownMenu from "./DropdownMenu";
import { data } from "../constants/dropdown";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select");
  const [selectedIndex, setSelectedIndex] = useState(0);

  console.log(isOpen);

  const handleKeyDownUp = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex < data.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : data.length - 1
      );
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setSelectedItem(data[selectedIndex].text);
      setIsOpen(false);
    }
  };

  const handleSelect = (e: React.MouseEvent<HTMLLIElement>) => {
    setSelectedItem(e.currentTarget.dataset.value || "Select");
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="dropdown"
        onKeyDown={handleKeyDownUp}
        onKeyUp={handleKeyUp}
      >
        <span>{selectedItem}</span>
        <span>
          <img
            className={clsx(isOpen ? "arrow-up" : "arrow-down")}
            src="/angle-down.png"
            alt="Angle down"
          />
        </span>
      </button>
      {isOpen && (
        <>
          <DropdownMenu onclick={handleSelect} selectedIndex={selectedIndex} />
          <Overlay setIsOpen={setIsOpen} />
        </>
      )}
    </div>
  );
};

export default Dropdown;
