type dropdownprops = {
  text: string;
};

type dropdownmenuprops = {
  onclick: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const data: dropdownprops[] = [
  {
    text: "item 1",
  },
  {
    text: "item 2",
  },
  {
    text: "item 3",
  },
  {
    text: "item 4",
  },
  {
    text: "item 5",
  },
  {
    text: "item 6",
  },
  {
    text: "item 7",
  },
];

const DropdownMenu = ({ onclick }: dropdownmenuprops) => {
  return (
    <div className="dropdownmenu">
      <div className="dropdownmenu__items">
        <ul className="dropdownmenu--item">
          {data.map((item, index) => (
            <li key={index} data-value={item.text} onClick={onclick}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
