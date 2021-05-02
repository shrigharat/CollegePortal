import React from "react";

import styled from "styled-components";
import AssignmentIcon from '@material-ui/icons/Assignment';

const MeetingDiv = styled.div`
  height: 150px;
  width: 260px;
  display: flex;
  position: relative;
  flex-direction: column;
  background: white;
  padding: .7rem;
  border-radius: 0.5rem;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1rem 0.1rem;
  filter: drop-shadow(0 0 4px rgba(72, 72, 72, 0.25));
  animation: appear-pop 0.5s ease;

  .head {
    display: flex;
    width: 100%;
    align-items: center;

    .meeting-name {
      width: 80%;
      font-weight: 600;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .svg-icon {
    height: 40px;
    width: 40px;
    stroke-width: 0.8pt;
  }
`;

const TaskCard = ({ item }) => {
  return (
    <MeetingDiv>
      <div className="head">
        <div className="meeting-name">{item.taskName}</div>
        <AssignmentIcon className="svg-icon" />
      </div>
      <div className="info">
        <div className="meeting-subject">{item.taskDescription}</div>
        <div className="meeting-timing">{item.taskPriority}</div>
      </div>
    </MeetingDiv>
  );
};

export default TaskCard;
