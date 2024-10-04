import { clsx } from "clsx";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

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
          console.log("clear");
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
      {isOpen && <DropdownMenu onclick={handleSelect} />}
    </div>
  );
};

export default Dropdown;
