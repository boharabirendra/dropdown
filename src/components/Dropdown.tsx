import { clsx } from "clsx";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Overlay from "./Overlay";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select");

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
          <DropdownMenu onclick={handleSelect} />
          <Overlay setIsOpen={setIsOpen} />
        </>
      )}
    </div>
  );
};

export default Dropdown;
