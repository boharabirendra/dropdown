import { Dispatch, SetStateAction } from "react";

type overlayprops = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Overlay = ({ setIsOpen }: overlayprops) => {
  return (
    <div
      onClick={() => {
        setIsOpen(false);
        console.log("clear");
      }}
      className="overlay"
    ></div>
  );
};

export default Overlay;
