import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const MenuItem = (props) => {
  const {
    name,
    subMenus,
    iconClassName,
    onClick,
    to,
    dropDownIcon,
    dropUpIcon,
  } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={onClick}>
      <Link to={to} className={`menu-item`}>
        <div className="menu-icon">{iconClassName}</div>
        <span>
          {name}
          <span className="menu-icon">
            {subMenus && subMenus.length > 0 ? dropDownIcon : null}
          </span>
        </span>
      </Link>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
