import React from "react";
import { Tooltip } from "@chakra-ui/react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";

const TileStyle = styled.div`
  padding: 0.7rem 1rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(53, 49, 49, 0.25);
  animation: slide-left 0.3s ease;

  .title:hover .assignment-name {
    text-decoration: underline;
  }
  .title:hover {
    cursor: pointer;
  }
`;

const Subtitle = styled.span`
  color: #575252;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none !important;
`;

const Tile = ({ onClickHandler, title, postedOn, info }) => {
  return (
    <TileStyle>
      <div className="title" onClick={onClickHandler}>
        <span className="assignment-name">{title}</span> <br />
        <Subtitle>{postedOn}</Subtitle>
      </div>
      <div className="due">
        {info.title} <br />{" "}
        {info.type === "string" ? (
          info.value
        ) : (
          <a href={info.value} target="__blank">
            <u>Click here</u>
          </a>
        )}
      </div>
      <div className="extra">
        <Menu>
          <Tooltip label="More actions" placement="left">
            <MenuButton>
              <MoreVertIcon />
            </MenuButton>
          </Tooltip>
          <MenuList>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </TileStyle>
  );
};

export default Tile;
