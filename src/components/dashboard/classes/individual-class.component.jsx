import React from "react";
import { withRouter } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Flex } from "@chakra-ui/react";
import {useSelector} from "react-redux";

import { Subtitle, ClassStyle } from "./individual-class.styles";
import CourseWork from "./coursework.component";
import Resources from "./resources.component";
import Meetings from "./meetings.component";
import Participants from "./participants.component";
import CreateCourseworkForm from "../../../forms/create.coursework.form";
import PostNotesForm from "../../../forms/post.notes.form";
import CreateMeetingForm from "../../../forms/create.meeting.form";
import ClassInfo from "./class-info.component.jsx";
import useModal from "../../general/modal/modal.component";
import {selectCurrentClass} from "../../../redux/current-class/current-class.slice";

import InfoIcon from "@material-ui/icons/Info";
import AddIcon from "@material-ui/icons/Add";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import BackButton from "../../general/back-button.component";


const Class = ({ match }) => {
  const classId = match.params.classId;
  const currentClass = useSelector(selectCurrentClass);
  console.log({ match });
  const classLinks = [
    { name: "Coursework", index: 0 },
    { name: "Resources", index: 1 },
    { name: "Meetings", index: 2 },
    { name: "Students", index: 3 },
  ];
  const [onOpen, setComponent, Modal, onClose] = useModal();
  const obj = [
    {
      title: "Post coursework",
      body: <CreateCourseworkForm isEditable={true} />,
    },
    {
      title: "Post Notes",
      body: (
        <PostNotesForm
          subjectId={match.params.subjectId}
          classId={classId}
          closeForm={onClose}
        />
      ),
    },
    { title: "Create Meeting", body: <CreateMeetingForm /> },
  ];

  const bodyComponents = [
    <CourseWork subjectId={match.params.subjectId} />,
    <Resources subjectId={match.params.subjectId} classId={classId} />,
    <Meetings subjectId={match.params.subjectId} />,
    <Participants subjectId={match.params.subjectId} />,
  ];
  const [activeLink, setActiveLink] = React.useState(0);

  return (
    <ClassStyle>
      <div className="class-header">
        <div className="class-info">
          <Flex justify="center" align="center" mr={4}>
            <BackButton />
          </Flex>
          <Flex direction="column">
            <span className="class-name">
              {currentClass.className}
            </span>
            <div className="subject-name">{currentClass.subjectName}</div>
            <Tooltip
              style={{ borderRadius: ".5rem !important" }}
              label="Display class info"
              placement="right"
              fontSize="sm"
            >
              <Subtitle
                onClick={() => {
                  setComponent({
                    title: "Third Year Computer Engineering",
                    body: <ClassInfo />,
                  });
                  onOpen();
                }}
              >
                Info <InfoIcon />
              </Subtitle>
            </Tooltip>
          </Flex>
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
            Post coursework
          </MenuItem>
          <MenuItem
            onClick={() => {
              setComponent(obj[1]);
              onOpen();
            }}
            icon={<ImportContactsOutlinedIcon />}
          >
            Post notes
          </MenuItem>
          <MenuItem
            onClick={() => {
              setComponent(obj[2]);
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
