import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box
} from "@chakra-ui/react";

const useModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [component, setComponent] = useState({
    title: "Default title",
    body: "Default Body",
  });
  //We set the body and the header of the modal through outside prop with the help of setComponent function
  //prop should be of shape {title: yourValue, body: yourComponent}

  return [
    onOpen,
    setComponent,
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box w="95%">{component.title}</Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{component.body}</ModalBody>
      </ModalContent>
    </Modal>,
    onClose
  ];
};

export default useModal;
