import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const useModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [component, setComponent] = useState({title: "Default title", body: "Default Body"});

  return [
    onOpen,
    setComponent,
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{component.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{component.body}</ModalBody>
      </ModalContent>
    </Modal>,
  ];
};

export default useModal;
