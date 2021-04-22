import React, {useState} from "react";

import "./sidebar.styles.scss";
import profileImg from "../../../assets/images/profile.jpeg";
import { SIDEBAR_LINKS } from "./sidebarLinks";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div className="sidebar">
      <div className="user-profile">
        <img className="profile-img" src={profileImg} />
        <div className="profile-name">Teresa Wagner</div>
      </div>
      <div className="links">
        {SIDEBAR_LINKS.map((link) => (
          <Link
            className={
              activeLink === link.index
                ? `active-link sidebar-link`
                : "sidebar-link"
            }
            to={link.to}
            onClick={()=> setActiveLink(link.index)}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
