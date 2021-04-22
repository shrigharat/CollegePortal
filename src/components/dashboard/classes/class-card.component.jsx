import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

const ClassCardWrapper = styled.div`
  height: 170px;
  width: 200px;
  background: white;
  filter: drop-shadow(0 0 6px rgba(72, 72, 72, 0.25));
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  animation: appear-pop 0.5s ease;
  transition: filter 0.2s ease;

  &:hover {
    filter: drop-shadow(0 0 2px rgba(72, 72, 72, 0.25));
  }

  .year {
    background: #4445aa;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1.1rem;
    font-weight: 500;
    color: white;
  }

  .info {
    padding: 0.5rem;
  }
`;

const ClassCard = () => {
  const history = useHistory();
  return (
    <ClassCardWrapper
      onClick={() => {
        history.push("classes/1");
      }}
    >
      <div className="year">Third year 2020-21 Computer Engineering</div>
      <div className="info">
        <div className="division">Division A</div>
        <div className="semester">Semester 5</div>
      </div>
    </ClassCardWrapper>
  );
};

export default ClassCard;
