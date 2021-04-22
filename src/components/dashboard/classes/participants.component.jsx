import React, { useState } from "react";
import styled from "styled-components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
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
    justify-content:flex-start;
    align-items: center;
    gap: .4rem;
  }
`;

const Subtitle = styled.span`
  color: #575252;
  font-size: 0.9rem;
  cursor: pointer;
`;

const Participants = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ clickedStudent, setClickedStudent ] = useState({});
  const participants = [
    { name: "Shrishail Gharat", rollNo: 55, UID: "118CP1417A", email: "gharatshri014@gmail.com", division: "A", class: "3rd Year Computer Engineering" },
    { name: "Shruti Gharat", rollNo: 53, UID: "118CP1517A", email: "gharatshruti99912@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Lee Kwang Soo", rollNo: 54, UID: "118CP1427A", email: "lksmagic@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Joen So Min", rollNo: 51, UID: "118CP1418A", email: "jeonsobari@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Shrishail Gharat", rollNo: 55, UID: "118CP1417A", email: "gharatshri014@gmail.com", division: "A", class: "3rd Year Computer Engineering" },
    { name: "Shruti Gharat", rollNo: 53, UID: "118CP1517A", email: "gharatshruti99912@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Lee Kwang Soo", rollNo: 54, UID: "118CP1427A", email: "lksmagic@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Joen So Min", rollNo: 51, UID: "118CP1418A", email: "jeonsobari@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Shrishail Gharat", rollNo: 55, UID: "118CP1417A", email: "gharatshri014@gmail.com", division: "A", class: "3rd Year Computer Engineering" },
    { name: "Shruti Gharat", rollNo: 53, UID: "118CP1517A", email: "gharatshruti99912@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Lee Kwang Soo", rollNo: 54, UID: "118CP1427A", email: "lksmagic@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Joen So Min", rollNo: 51, UID: "118CP1418A", email: "jeonsobari@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Shrishail Gharat", rollNo: 55, UID: "118CP1417A", email: "gharatshri014@gmail.com", division: "A", class: "3rd Year Computer Engineering" },
    { name: "Shruti Gharat", rollNo: 53, UID: "118CP1517A", email: "gharatshruti99912@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Lee Kwang Soo", rollNo: 54, UID: "118CP1427A", email: "lksmagic@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Joen So Min", rollNo: 51, UID: "118CP1418A", email: "jeonsobari@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Shrishail Gharat", rollNo: 55, UID: "118CP1417A", email: "gharatshri014@gmail.com", division: "A", class: "3rd Year Computer Engineering" },
    { name: "Shruti Gharat", rollNo: 53, UID: "118CP1517A", email: "gharatshruti99912@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Lee Kwang Soo", rollNo: 54, UID: "118CP1427A", email: "lksmagic@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Joen So Min", rollNo: 51, UID: "118CP1418A", email: "jeonsobari@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Shrishail Gharat", rollNo: 55, UID: "118CP1417A", email: "gharatshri014@gmail.com", division: "A", class: "3rd Year Computer Engineering" },
    { name: "Shruti Gharat", rollNo: 53, UID: "118CP1517A", email: "gharatshruti99912@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Lee Kwang Soo", rollNo: 54, UID: "118CP1427A", email: "lksmagic@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Joen So Min", rollNo: 51, UID: "118CP1418A", email: "jeonsobari@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Shrishail Gharat", rollNo: 55, UID: "118CP1417A", email: "gharatshri014@gmail.com", division: "A", class: "3rd Year Computer Engineering" },
    { name: "Shruti Gharat", rollNo: 53, UID: "118CP1517A", email: "gharatshruti99912@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Lee Kwang Soo", rollNo: 54, UID: "118CP1427A", email: "lksmagic@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Joen So Min", rollNo: 51, UID: "118CP1418A", email: "jeonsobari@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Shrishail Gharat", rollNo: 55, UID: "118CP1417A", email: "gharatshri014@gmail.com", division: "A", class: "3rd Year Computer Engineering" },
    { name: "Shruti Gharat", rollNo: 53, UID: "118CP1517A", email: "gharatshruti99912@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Lee Kwang Soo", rollNo: 54, UID: "118CP1427A", email: "lksmagic@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Joen So Min", rollNo: 51, UID: "118CP1418A", email: "jeonsobari@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Shrishail Gharat", rollNo: 55, UID: "118CP1417A", email: "gharatshri014@gmail.com", division: "A", class: "3rd Year Computer Engineering" },
    { name: "Shruti Gharat", rollNo: 53, UID: "118CP1517A", email: "gharatshruti99912@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Lee Kwang Soo", rollNo: 54, UID: "118CP1427A", email: "lksmagic@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Joen So Min", rollNo: 51, UID: "118CP1418A", email: "jeonsobari@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Shrishail Gharat", rollNo: 55, UID: "118CP1417A", email: "gharatshri014@gmail.com", division: "A", class: "3rd Year Computer Engineering" },
    { name: "Shruti Gharat", rollNo: 53, UID: "118CP1517A", email: "gharatshruti99912@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Lee Kwang Soo", rollNo: 54, UID: "118CP1427A", email: "lksmagic@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Joen So Min", rollNo: 51, UID: "118CP1418A", email: "jeonsobari@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Shrishail Gharat", rollNo: 55, UID: "118CP1417A", email: "gharatshri014@gmail.com", division: "A", class: "3rd Year Computer Engineering" },
    { name: "Shruti Gharat", rollNo: 53, UID: "118CP1517A", email: "gharatshruti99912@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Lee Kwang Soo", rollNo: 54, UID: "118CP1427A", email: "lksmagic@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Joen So Min", rollNo: 51, UID: "118CP1418A", email: "jeonsobari@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Shrishail Gharat", rollNo: 55, UID: "118CP1417A", email: "gharatshri014@gmail.com", division: "A", class: "3rd Year Computer Engineering" },
    { name: "Shruti Gharat", rollNo: 53, UID: "118CP1517A", email: "gharatshruti99912@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Lee Kwang Soo", rollNo: 54, UID: "118CP1427A", email: "lksmagic@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Joen So Min", rollNo: 51, UID: "118CP1418A", email: "jeonsobari@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Shrishail Gharat", rollNo: 55, UID: "118CP1417A", email: "gharatshri014@gmail.com", division: "A", class: "3rd Year Computer Engineering" },
    { name: "Shruti Gharat", rollNo: 53, UID: "118CP1517A", email: "gharatshruti99912@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Lee Kwang Soo", rollNo: 54, UID: "118CP1427A", email: "lksmagic@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Joen So Min", rollNo: 51, UID: "118CP1418A", email: "jeonsobari@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Shrishail Gharat", rollNo: 55, UID: "118CP1417A", email: "gharatshri014@gmail.com", division: "A", class: "3rd Year Computer Engineering" },
    { name: "Shruti Gharat", rollNo: 53, UID: "118CP1517A", email: "gharatshruti99912@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Lee Kwang Soo", rollNo: 54, UID: "118CP1427A", email: "lksmagic@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
    { name: "Joen So Min", rollNo: 51, UID: "118CP1418A", email: "jeonsobari@gmail.com", division: "A", class: "3rd Year Computer Engineering"  },
  ];

  return (
    <StyledGrid>
      {participants.map((student) => (
        <div
          className="student-tile"
          onClick={() => {
            setClickedStudent(student);
            onOpen();
          }}
        >
          <PersonOutlineIcon />
          {student.name}
        </div>
      ))}
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div>{clickedStudent.name}</div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="description">UID - {clickedStudent.UID}
              <br />
              Email - {clickedStudent.email}
              <br />
              Roll no - {clickedStudent.rollNo}
              <br />
              Class - {clickedStudent.class}
              <br />
              Division - {clickedStudent.division}
              <br /><br />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </StyledGrid>
  );
};

export default Participants;
