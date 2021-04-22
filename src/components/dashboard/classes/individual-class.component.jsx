import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";
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

import CourseWork from "./coursework.component";
import Resources from "./resources.component";
import Meetings from "./meetings.component";
import Participants from "./participants.component";
import CreateAssignmentForm from "../../../forms/create.assignment.form";
import CreateNoticeForm from "../../../forms/create.notice.form";
import PostNotesForm from "../../../forms/post.notes.form";
import CreateMeetingForm from "../../../forms/create.meeting.form";
import useModal from "../../general/modal/modal.component";

import InfoIcon from "@material-ui/icons/Info";
import AddIcon from "@material-ui/icons/Add";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";

const Subtitle = styled.span`
  color: #575252;
  font-size: 0.9rem;
  cursor: pointer;
  width: max-content;
`;

const ClassStyle = styled.div`
position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;

  .class-header {
    background: white;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    filter: drop-shadow(0 0 4px rgba(72, 72, 72, 0.25));
    border-radius: 0.5rem;
    padding: 1.5rem 1rem;

    .class-info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      .class-name {
        font-weight: 600;
        font-size: 1.1rem;
      }
    }

    .class-nav {
      display: flex;
      gap: 0.8rem;
      width: max-content;

      .link {
        padding: 0.3rem 0.5rem;
        border-radius: 0.4rem;
        cursor: pointer;
        transition: background-color 0.2s ease;
        font-size: 0.9rem;

        &:hover {
          background-color: rgba(72, 72, 72, 0.25);
        }
      }

      .active-link {
        background-color: #4444aa;
        color: white;

        &:hover {
          background-color: #4444aa;
          color: white;
        }
      }
    }
  }

  .add-btn {
    position: fixed;
    cursor: pointer;
    outline: none;
    right: 1rem;
    bottom: 0.5rem;
    padding: 0.3rem;
    border: 2px solid white;
    border-radius: 50%;
    background-color: #4445aa;
    color: white;
    z-index: 10;
    box-shadow: 0 0 4px 4px rgba(72, 72, 72, 0.25);

    &:active {
      animation: spin .2s ease forwards;
    }
  }

  .class-body {
    margin-top: 1.5rem;
    padding-bottom: 1.5rem;

    .coursework-list,
    .resources-list {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
  }

  @media screen and (max-width: 850px) {
    .class-header {
      flex-direction: column;
    }
  }

  @keyframes slide-left {
    from {
      transform: translateX(10%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(180deg);
    }
  }
`;

const Class = ({ match }) => {
  const classId = match.params.classId;
  const classLinks = [
    { name: "Coursework", index: 0 },
    { name: "Resources", index: 1 },
    { name: "Meetings", index: 2 },
    { name: "Students", index: 3 },
  ];
  const [onOpen, setComponent, Modal] = useModal();
  const obj = [
    { title: "Post assignment", body: <CreateAssignmentForm /> },
    { title: "Post notice", body: <CreateNoticeForm /> },
    { title: "Post Notes", body: <PostNotesForm /> },
    { title: "Create Meeting", body: <CreateMeetingForm /> },
  ];

  const bodyComponents = [
    <CourseWork />,
    <Resources />,
    <Meetings />,
    <Participants />,
  ];
  const [activeLink, setActiveLink] = React.useState(0);

  return (
    <ClassStyle>
      <div className="class-header">
        <div className="class-info">
          <span className="class-name">
            Third year Computer Engineering 2020-21
          </span>
          <div className="subject-name">Computer networks</div>
          <Tooltip
            style={{ borderRadius: ".5rem !important" }}
            label="Display class info"
            placement="right"
            fontSize="sm"
          >
            <Subtitle>
              Info <InfoIcon />
            </Subtitle>
          </Tooltip>
        </div>
        <div className="class-nav">
          {classLinks.map((link) => (
            <span
              className={activeLink == link.index ? "active-link link" : "link"}
              onClick={() => setActiveLink(link.index)}
            >
              {link.name}
            </span>
          ))}
        </div>
      </div>
      <div className="class-body">{bodyComponents[activeLink]}</div>
      <Menu gutter={12}>
        <div
          className="add-btn"
          onClick={() => {
            console.log("FAB clicked");
          }}
        >
          <MenuButton>
            <AddIcon fontSize="large" />
          </MenuButton>
        </div>

        <MenuList>
          <MenuItem
            onClick={() => {
              setComponent(obj[0]);
              onOpen();
            }}
            icon={<FileCopyOutlinedIcon />}
          >
            Post assignment
          </MenuItem>
          <MenuItem
            onClick={() => {
              setComponent(obj[1]);
              onOpen();
            }}
            icon={<NotificationsActiveOutlinedIcon />}
          >
            Post notice
          </MenuItem>
          <MenuItem
            onClick={() => {
              setComponent(obj[2]);
              onOpen();
            }}
            icon={<ImportContactsOutlinedIcon />}
          >
            Post notes
          </MenuItem>
          <MenuItem
            onClick={() => {
              setComponent(obj[3]);
              onOpen();
            }}
            icon={<VideocamOutlinedIcon />}
          >
            Create meeting
          </MenuItem>
        </MenuList>
      </Menu>
      {Modal}
    </ClassStyle>
  );
};

export default withRouter(Class);
