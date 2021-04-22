import React from "react";
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

import Tile from "./tile.component";

const Subtitle = styled.span`
  color: #575252;
  font-size: 0.9rem;
  cursor: pointer;
`;

const CourseWork = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="coursework-list">
      <Tile
        title={"Computer networks : Assignment no 3"}
        postedOn={"Posted on 10-04-2021"}
        info={{title: "Due by", value: "15-04-2021", type: "string"}}
        onClickHandler={onOpen}
      />
      <Tile
        title={"Computer networks : Assignment no 2"}
        postedOn={"Posted on 5-04-2021"}
        info={{title: "Due by", value: "10-04-2021", type: "string"}}
        onClickHandler={onOpen}
      />
      <Tile
        title={"Computer networks : Assignment no 1"}
        postedOn={"Posted on 1-04-2021"}
        info={{title: "Due by", value: "05-04-2021", type: "string"}}
        onClickHandler={onOpen}
      />
      <Tile
        title={"Computer networks : Assignment no 3"}
        postedOn={"Posted on 10-04-2021"}
        info={{title: "Due by", value: "15-04-2021", type: "string"}}
        onClickHandler={onOpen}
      />
      <Tile
        title={"Computer networks : Assignment no 2"}
        postedOn={"Posted on 5-04-2021"}
        info={{title: "Due by", value: "10-04-2021", type: "string"}}
        onClickHandler={onOpen}
      />
      <Tile
        title={"Computer networks : Assignment no 1"}
        postedOn={"Posted on 1-04-2021"}
        info={{title: "Due by", value: "05-04-2021", type: "string"}}
        onClickHandler={onOpen}
      />
      <Tile
        title={"Computer networks : Assignment no 3"}
        postedOn={"Posted on 10-04-2021"}
        info={{title: "Due by", value: "15-04-2021", type: "string"}}
        onClickHandler={onOpen}
      />
      <Tile
        title={"Computer networks : Assignment no 1"}
        postedOn={"Posted on 1-04-2021"}
        info={{title: "Due by", value: "05-04-2021", type: "string"}}
        onClickHandler={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div>Computer Networks : Assignment no 1</div>
            <Subtitle>Posted on 10-04-2021</Subtitle>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="description">
              Description
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              tempore velit ea ipsa laudantium iste sint mollitia incidunt rem
              numquam! Repudiandae sapiente dolorem aperiam delectus molestias
              beatae id sint libero reprehenderit.
              <br />
              <br />
              <input type="file" accept=".pdf, .doc" />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CourseWork;
