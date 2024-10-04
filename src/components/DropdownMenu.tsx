type dropdownprops = {
  text: string;
};

type dropdownmenuprops = {
  onclick: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const data: dropdownprops[] = [
  {
    text: "Computer Science",
  },
  {
    text: "Cloud computing",
  },
  {
    text: "Database management system",
  },
  {
    text: "Cyber security",
  },
  {
    text: "Information technology",
  },
  {
    text: "Cryptography",
  },
  {
    text: "Data structure & algorithm",
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
