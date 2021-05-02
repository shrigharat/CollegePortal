import React from "react";
import { Flex, Stack, Box, Button } from "@chakra-ui/react";
import moment from "moment";
import { useSelector } from "react-redux";

import Tile from "./tile.component";
import CreateNoticeForm from "../../../forms/create.notice.form";
import useModal from "../../general/modal/modal.component";
import { firestore } from "../../../firebase/firebase.utils";
import { selectCurrentClass } from "../../../redux/current-class/current-class.slice";

const ClassNotices = () => {
  const [onOpen, setComponent, Modal] = useModal();
  const [notices, setNotices] = React.useState([]);
  const currentClass = useSelector(selectCurrentClass);

  React.useEffect(() => {
    setComponent({ title: "Post notice", body: <CreateNoticeForm /> });
    return firestore
      .collection(`classes/${currentClass.classId}/notices`)
      .onSnapshot((snapshot) => {
        const noticesArray = [];
        snapshot.docs.forEach((doc) => noticesArray.push(doc.data()));
        setNotices(noticesArray);
      });
  }, []);
  
  return (
    <Stack w="100%" h="100%">
      <Flex direction="row-reverse" mb={4}>
        <Button colorScheme="lavender" onClick={onOpen}>
          Post notice
        </Button>
      </Flex>
      {notices.map(({ title, postedOn, description, id, fileLink }) => (
        <Tile
          key={id}
          props={{
            title,
            postedOn: moment(postedOn.toDate()).calendar(),
            description,
            info: {
              title: "Link",
              value: fileLink,
              type: "link",
            },
          }}
        />
      ))}
      {Modal}
    </Stack>
  );
};

export default ClassNotices;
