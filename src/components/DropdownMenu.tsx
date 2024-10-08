import { data } from "../constants/dropdown";

export type dropdownprops = {
  text: string;
};

type dropdownmenuprops = {
  onclick: (e: React.MouseEvent<HTMLLIElement>) => void;
  selectedIndex: number;
};

const DropdownMenu = ({ onclick, selectedIndex }: dropdownmenuprops) => {
  return (
    <div className="dropdownmenu">
      <div className="dropdownmenu__items">
        <ul className="dropdownmenu--item">
          {data.map((item, index) => (
            <li
              key={index}
              className={index === selectedIndex ? "active" : ""}
              data-value={item.text}
              onClick={onclick}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
