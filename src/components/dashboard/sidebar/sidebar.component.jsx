import React, { useState } from "react";

import "./sidebar.styles.scss";
import profileImg from "../../../assets/images/profile.jpeg";
import { SIDEBAR_LINKS } from "./sidebarLinks";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { userLogout, selectUser } from "../../../redux/user/user.slice";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "@chakra-ui/react";
import {selectColorScheme} from "../../../redux/colormode/color.slice"; 

import SidebarStyles from "./sidebar.styles";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const theme = useSelector(selectColorScheme);
  console.log("Theme: ", {theme});
  return (
    <SidebarStyles {...theme}>
      <div className="user-profile">
        <Image
          boxSize="70px"
          borderRadius="50%"
          border="2px solid white"
          src={user.userImgUrl}
          fallbackSrc={profileImg}
        />
        <div className="profile-name">{user.userName}</div>
        <Button
          w="80px"
          h="30px"
          onClick={() => {
            console.log("User logging out...");
            dispatch(userLogout());
          }}
        >
          Logout
        </Button>
      </div>
      <div className="links">
        {SIDEBAR_LINKS.map((link) => (
          <Link
            key={link.index}
            className={
              activeLink === link.index
                ? `active-link sidebar-link`
                : "sidebar-link"
            }
            to={link.to}
            onClick={() => setActiveLink(link.index)}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>
    </SidebarStyles>
  );
};

export default Sidebar;
