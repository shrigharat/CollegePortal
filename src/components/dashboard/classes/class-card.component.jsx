import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentClass } from "../../../redux/current-class/current-class.slice";

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
  background-size: cover;

  &:hover {
    filter: drop-shadow(0 0 2px rgba(72, 72, 72, 0.25));
  }

  .class-content {
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }

  .year {
    /* background: #4445aa; */
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1.1rem;
    font-weight: 500;
    color: white;
    width: 100%;
    height: 60%;
  }

  .info {
    padding: 0.5rem;
    width: 100%;
    height: 40%;
    color: white;
  }
`;

const ClassCard = ({ userClass }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { className, classInchargeId, classId } = userClass;
  return (
    <ClassCardWrapper
      style={{
        backgroundImage:
          "url(https://cdn.dribbble.com/users/76454/screenshots/10137673/media/e1a4a9446126be2878229ec61fb9356b.png?compress=1&resize=800x600)",
      }}
      onClick={() => {
        dispatch(setCurrentClass(userClass));
        history.push(`classes/${classId}`);
      }}
    >
      <div className="class-content">
        <div className="year">{className}</div>
        <div className="info">
          <div className="division">Division {}</div>
          <div className="semester">Semester 5</div>
        </div>
      </div>
    </ClassCardWrapper>
  );
};

export default ClassCard;
