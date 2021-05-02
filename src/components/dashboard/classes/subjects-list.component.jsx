import React from "react";
import { withRouter } from "react-router-dom";
import {
  Text,
  Stack,
  Box,
  Flex,
  Button,
  Spinner,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import useModal from "../../general/modal/modal.component";
import CreateSubjectForm from "../../../forms/create.subject.form";
import SubjectCard from "./subject-card.component";
import {
  fetchSubjectsForClass,
  createTimetable,
} from "../../../firebase/firebase.functions";
import { firestore } from "../../../firebase/firebase.utils";

const SubjectsList = ({ match }) => {
  const [onOpen, setComponent, Modal, onClose] = useModal();
  const [subjects, setSubjects] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);
  const currentClassId = match.params.classId;

  React.useEffect(() => {
    setIsFetching(true);
    // fetchSubjectsForClass(currentClassId).then((response) => {
    //   setIsFetching(false);
    //   setSubjects(response);
    //   console.log(response);
    // });
    return firestore
      .collection(`classes/${currentClassId}/subjects`)
      .onSnapshot((snapshot) => {
        let subjectsArray = [];
        snapshot.docs.forEach((doc) => subjectsArray.push(doc.data()));
        setSubjects(subjectsArray);
        setIsFetching(false);
      });
  }, []);

  return (
    <Box w="100%" h="100%">
      <Flex
        direction="row-reverse"
        justify="space-between"
        align="center"
        mb="6"
      >
        <Button
          _focus={{outline: "none"}}
          colorScheme="lavender"
          onClick={() => {
            setComponent({
              title: "Add subject to class",
              body: (
                <CreateSubjectForm
                  classId={currentClassId}
                  closeForm={onClose}
                />
              ),
            });
            onOpen();
          }}
        >
          Add subject
        </Button>
      </Flex>
      {isFetching ? (
        <Flex w="100%" h="100%" justify="center" align="center">
          <Spinner />
        </Flex>
      ) : subjects.length === 0 ? (
        <Flex w="100%" h="100%" justify="center" align="center">
          <Text fontWeight="medium">No subjects added!</Text>
        </Flex>
      ) : (
        <Grid
          w="100%"
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap={5}
        >
          {subjects.map(
            (subject) => (
              <SubjectCard subject={subject} />
            )
          )}
        </Grid>
      )}
      {Modal}
    </Box>
  );
};

export default withRouter(SubjectsList);
