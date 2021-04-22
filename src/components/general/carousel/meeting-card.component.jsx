import React from "react";

import styled from "styled-components";

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
      font-weight: 500;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .svg-icon {
    height: 40px;
    width: 40px;
    stroke: #ff7f50;
    stroke-width: 0.8pt;
  }
`;

const MeetingCard = ({ item }) => {
  return (
    <MeetingDiv>
      <div className="head">
        <div className="meeting-name">{item.mName}</div>
        <svg className="svg-icon" viewBox="0 0 20 20">
          <path d="M17.919,4.633l-3.833,2.48V6.371c0-1-0.815-1.815-1.816-1.815H3.191c-1.001,0-1.816,0.814-1.816,1.815v7.261c0,1.001,0.815,1.815,1.816,1.815h9.079c1.001,0,1.816-0.814,1.816-1.815v-0.739l3.833,2.478c0.428,0.226,0.706-0.157,0.706-0.377V5.01C18.625,4.787,18.374,4.378,17.919,4.633 M13.178,13.632c0,0.501-0.406,0.907-0.908,0.907H3.191c-0.501,0-0.908-0.406-0.908-0.907V6.371c0-0.501,0.407-0.907,0.908-0.907h9.079c0.502,0,0.908,0.406,0.908,0.907V13.632zM17.717,14.158l-3.631-2.348V8.193l3.631-2.348V14.158z"></path>
        </svg>
      </div>
      <div className="info">
        <div className="meeting-subject">{item.mSubject}</div>
        <div className="meeting-timing">{item.mTiming}</div>
      </div>
    </MeetingDiv>
  );
};

export default MeetingCard;
