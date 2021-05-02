import React, { useState } from "react";
import styled from "styled-components";
import useModal from "../../general/modal/modal.component";

import {
  Stack,
  Box,
  Input,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;

  .student-tile {
    background-color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 2px solid #7373f8;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.4rem;
  }
`;

const Subtitle = styled.span`
  color: #575252;
  font-size: 0.9rem;
  cursor: pointer;
`;

const Participants = () => {
  const [onOpen, setComponent, Modal] = useModal();
  const [clickedStudent, setClickedStudent] = useState({});
  const participants = [
    {
      name: "Shrishail Gharat",
      rollNo: 55,
      UID: "118CP1417A",
      email: "gharatshri014@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shruti Gharat",
      rollNo: 53,
      UID: "118CP1517A",
      email: "gharatshruti99912@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Lee Kwang Soo",
      rollNo: 54,
      UID: "118CP1427A",
      email: "lksmagic@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Joen So Min",
      rollNo: 51,
      UID: "118CP1418A",
      email: "jeonsobari@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shrishail Gharat",
      rollNo: 55,
      UID: "118CP1417A",
      email: "gharatshri014@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shruti Gharat",
      rollNo: 53,
      UID: "118CP1517A",
      email: "gharatshruti99912@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Lee Kwang Soo",
      rollNo: 54,
      UID: "118CP1427A",
      email: "lksmagic@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Joen So Min",
      rollNo: 51,
      UID: "118CP1418A",
      email: "jeonsobari@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shrishail Gharat",
      rollNo: 55,
      UID: "118CP1417A",
      email: "gharatshri014@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shruti Gharat",
      rollNo: 53,
      UID: "118CP1517A",
      email: "gharatshruti99912@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Lee Kwang Soo",
      rollNo: 54,
      UID: "118CP1427A",
      email: "lksmagic@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Joen So Min",
      rollNo: 51,
      UID: "118CP1418A",
      email: "jeonsobari@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shrishail Gharat",
      rollNo: 55,
      UID: "118CP1417A",
      email: "gharatshri014@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shruti Gharat",
      rollNo: 53,
      UID: "118CP1517A",
      email: "gharatshruti99912@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Lee Kwang Soo",
      rollNo: 54,
      UID: "118CP1427A",
      email: "lksmagic@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Joen So Min",
      rollNo: 51,
      UID: "118CP1418A",
      email: "jeonsobari@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shrishail Gharat",
      rollNo: 55,
      UID: "118CP1417A",
      email: "gharatshri014@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shruti Gharat",
      rollNo: 53,
      UID: "118CP1517A",
      email: "gharatshruti99912@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Lee Kwang Soo",
      rollNo: 54,
      UID: "118CP1427A",
      email: "lksmagic@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Joen So Min",
      rollNo: 51,
      UID: "118CP1418A",
      email: "jeonsobari@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shrishail Gharat",
      rollNo: 55,
      UID: "118CP1417A",
      email: "gharatshri014@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shruti Gharat",
      rollNo: 53,
      UID: "118CP1517A",
      email: "gharatshruti99912@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Lee Kwang Soo",
      rollNo: 54,
      UID: "118CP1427A",
      email: "lksmagic@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Joen So Min",
      rollNo: 51,
      UID: "118CP1418A",
      email: "jeonsobari@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shrishail Gharat",
      rollNo: 55,
      UID: "118CP1417A",
      email: "gharatshri014@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shruti Gharat",
      rollNo: 53,
      UID: "118CP1517A",
      email: "gharatshruti99912@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Lee Kwang Soo",
      rollNo: 54,
      UID: "118CP1427A",
      email: "lksmagic@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Joen So Min",
      rollNo: 51,
      UID: "118CP1418A",
      email: "jeonsobari@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shrishail Gharat",
      rollNo: 55,
      UID: "118CP1417A",
      email: "gharatshri014@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shruti Gharat",
      rollNo: 53,
      UID: "118CP1517A",
      email: "gharatshruti99912@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Lee Kwang Soo",
      rollNo: 54,
      UID: "118CP1427A",
      email: "lksmagic@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Joen So Min",
      rollNo: 51,
      UID: "118CP1418A",
      email: "jeonsobari@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shrishail Gharat",
      rollNo: 55,
      UID: "118CP1417A",
      email: "gharatshri014@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shruti Gharat",
      rollNo: 53,
      UID: "118CP1517A",
      email: "gharatshruti99912@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Lee Kwang Soo",
      rollNo: 54,
      UID: "118CP1427A",
      email: "lksmagic@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Joen So Min",
      rollNo: 51,
      UID: "118CP1418A",
      email: "jeonsobari@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shrishail Gharat",
      rollNo: 55,
      UID: "118CP1417A",
      email: "gharatshri014@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shruti Gharat",
      rollNo: 53,
      UID: "118CP1517A",
      email: "gharatshruti99912@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Lee Kwang Soo",
      rollNo: 54,
      UID: "118CP1427A",
      email: "lksmagic@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Joen So Min",
      rollNo: 51,
      UID: "118CP1418A",
      email: "jeonsobari@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shrishail Gharat",
      rollNo: 55,
      UID: "118CP1417A",
      email: "gharatshri014@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shruti Gharat",
      rollNo: 53,
      UID: "118CP1517A",
      email: "gharatshruti99912@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Lee Kwang Soo",
      rollNo: 54,
      UID: "118CP1427A",
      email: "lksmagic@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Joen So Min",
      rollNo: 51,
      UID: "118CP1418A",
      email: "jeonsobari@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shrishail Gharat",
      rollNo: 55,
      UID: "118CP1417A",
      email: "gharatshri014@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shruti Gharat",
      rollNo: 53,
      UID: "118CP1517A",
      email: "gharatshruti99912@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Lee Kwang Soo",
      rollNo: 54,
      UID: "118CP1427A",
      email: "lksmagic@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Joen So Min",
      rollNo: 51,
      UID: "118CP1418A",
      email: "jeonsobari@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shrishail Gharat",
      rollNo: 55,
      UID: "118CP1417A",
      email: "gharatshri014@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shruti Gharat",
      rollNo: 53,
      UID: "118CP1517A",
      email: "gharatshruti99912@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Lee Kwang Soo",
      rollNo: 54,
      UID: "118CP1427A",
      email: "lksmagic@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Joen So Min",
      rollNo: 51,
      UID: "118CP1418A",
      email: "jeonsobari@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shrishail Gharat",
      rollNo: 55,
      UID: "118CP1417A",
      email: "gharatshri014@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Shruti Gharat",
      rollNo: 53,
      UID: "118CP1517A",
      email: "gharatshruti99912@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Lee Kwang Soo",
      rollNo: 54,
      UID: "118CP1427A",
      email: "lksmagic@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
    {
      name: "Joen So Min",
      rollNo: 51,
      UID: "118CP1418A",
      email: "jeonsobari@gmail.com",
      division: "A",
      class: "3rd Year Computer Engineering",
    },
  ];

  return (
    <StyledGrid>
      {participants.map((student) => (
        <div
          className="student-tile"
          onClick={() => {
            setComponent({
              title: "Student details",
              body: <StudentInfo student={student} />,
            });
            onOpen();
          }}
        >
          <PersonOutlineIcon />
          {student.name}
        </div>
      ))}
      {Modal}
    </StyledGrid>
  );
};

const StudentInfo = ({ student }) => {
  return (
    <Stack spacing=".5rem">
      <InputGroup>
        <InputLeftAddon children={"Full name"} />
        <Input value={student.name} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon isReadOnly children={"Class"} />
        <Input value={student.class} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon children={"Division"} />
        <Input value={student.division} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon children={"Roll no"} />
        <Input value={student.rollNo} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon children={"UID"} />
        <Input value={student.UID} />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon children={"Email"} />
        <Input value={student.email} />
      </InputGroup>
      <Box />
    </Stack>
  );
};

export default Participants;
