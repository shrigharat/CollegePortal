import React from "react";
import { Tooltip, Button, Image, Badge, Flex, Box } from "@chakra-ui/react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
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

const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem 1rem;
  background-color: white;
  font-size: 0.9rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(53, 49, 49, 0.25);
  animation: slide-left 0.3s ease;
  transition: 0.2s ease;

  .newtab-link {
    cursor: pointer;
    margin-left: .5rem;
  }
`;

const TileStyle = styled.div`
  display: flex;
  justify-content: space-between;

  .title:hover .assignment-name {
    text-decoration: underline;
  }
  .title:hover {
    cursor: pointer;
  }

  .extra {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .description2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      text-align: center;
      font-size: 0.8rem;
    }
  }
`;

const ExpandSection = styled.div`
  margin-top: 0.5rem;
  display: flex;

  .description1 {
    width: 85%;
  }
`;

const Subtitle = styled.span`
  color: #575252;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none !important;
`;

const Tile = ({ props, onClickHandler, shouldExpand, showBadge = false }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const openInNewTab = (url) => {
    console.log("Sending to url: ", { url });
    let newTab = window.open(url, "_blank");
  };

  return (
    <TileWrapper>
      <TileStyle>
        <div className="title" onClick={onClickHandler}>
          <span className="assignment-name">
            {props.title}
            {shouldExpand ? (
              <span
                className="newtab-link"
                onClick={() => openInNewTab(props.link)}
              >
                <OpenInNewIcon />
              </span>
            ) : null}
          </span>
          <br />
          <Subtitle>{props.postedOn}</Subtitle>
        </div>
        <div className="due">
          {props.info.title} <br />
          {props.info.type === "string" ? (
            <Flex gap=".5rem">
              <Box mr=".5rem">{props.info.value}</Box>
              {showBadge ? (
                <Badge
                  colorScheme="yellow"
                  animation="blink 2s ease-in-out infinite alternate"
                >
                  Upcoming
                </Badge>
              ) : null}
            </Flex>
          ) : (
            <span
              className="newtab-link"
              onClick={() => openInNewTab(props.info.value)}
            >
              <u>Click here</u>
            </span>
          )}
        </div>
        <div className="extra">
          {shouldExpand ? (
            <div className="description2">
              <Image
                boxSize="40px"
                borderRadius="50%"
                objectFit="cover"
                src="https://images.indianexpress.com/2018/07/dj7591.jpg"
                alt=""
              />
              <div>Prof. Dwayne Johnson</div>
            </div>
          ) : null}
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
      {isExpanded ? (
        <ExpandSection>
          <div className="description1">
            Description: <br /> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eum voluptate recusandae, incidunt ipsa dolore
            velit neque ratione voluptatum aut delectus nam veniam, adipisci
            saepe esse sequi nulla blanditiis cupiditate, porro necessitatibus
            odit nisi quia. Eligendi beatae tenetur rem, magnam vel,
            necessitatibus illo sapiente aut officia, omnis aliquid.
            Accusantium, unde eligendi.
          </div>
          <div className="description2">
            <Image
              boxSize="40px"
              borderRadius="50%"
              objectFit="cover"
              src="https://images.indianexpress.com/2018/07/dj7591.jpg"
              alt=""
            />
            <div>Prof. Dwayne Johnson</div>
          </div>
        </ExpandSection>
      ) : null}
    </TileWrapper>
  );
};

export default Tile;
