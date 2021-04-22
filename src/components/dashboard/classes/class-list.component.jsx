import React from "react";
import ClassCard from "./class-card.component";
import styled from "styled-components";

const Classes = styled.div`
  .title {
    font-weight: 600;
    font-size: 1.2rem;
  }

  .classes-container {
    margin: 1rem 0 1.5rem;

    h4 {
      font-weight: 500;
    }
  }

  .class-list {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 1rem;
  }
`;

const ClassList = () => {
  return (
    <Classes>
      <h1 className="title">Classes</h1>
      <div className="classes-container">
        <h4>Your class</h4>
        <div className="class-list">
          <ClassCard />
        </div>
      </div>
      <div className="classes-container">
        <h4>Others</h4>
        <div className="class-list">
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </div>
      </div>
    </Classes>
  );
};

export default ClassList;
