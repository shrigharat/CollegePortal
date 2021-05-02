import React from "react";
import ClassCard from "./class-card.component";
import styled from "styled-components";
import { Flex, Button, Spinner, Text, Stack } from "@chakra-ui/react";
import useModal from "../../general/modal/modal.component";
import AddIcon from "@material-ui/icons/Add";

import CreateClassForm from "../../../forms/create-class.form";
import JoinClassForm from "../../../forms/join-class.form";
import { fetchUserClasses } from "../../../firebase/firebase.functions";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/user/user.slice";
import { useDispatch } from "react-redux";
import { clearCurrentClass } from "../../../redux/current-class/current-class.slice";

const Classes = styled.div`

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
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [onOpen, setComponent, Modal, onClose] = useModal();
  const [isFetching, setIsFetching] = React.useState(false);
  const [userClasses, setUserClasses] = React.useState({
    myClasses: [],
    otherClasses: [],
  });
  console.log("Classes are : ", userClasses);

  React.useEffect(() => {
    console.log("Class list mounted!");
    dispatch(clearCurrentClass());
  }, []);

  React.useEffect(() => {
    const getClasses = async () => {
      setIsFetching(true);
      let classes = await fetchUserClasses(user.id, user.classId);
      setUserClasses(classes);
      setIsFetching(false);
    };
    getClasses();
  }, [user]);

  //If user has no classes show "Nothing here" message
  //If he has classes and they are not fetched show spinner
  //If he has classes and they are fetched show lclass list component

  return (
    <Stack>
      <Flex direction="row" justify="space-between" align="center">
        <Text fontWeight="semibold" fontSize="1.2rem">Classes</Text>
        <Stack direction="row">
          <Button
            colorScheme="lavender"
            rightIcon={<AddIcon />}
            onClick={() => {
              setComponent({
                title: "Create class",
                body: <CreateClassForm actionCompleted={onClose} />,
              });
              onOpen();
            }}
          >
            Create class
          </Button>
          <Button
            border="1px solid black"
            rightIcon={<AddIcon />}
            onClick={() => {
              setComponent({
                title: "Join class",
                body: <JoinClassForm actionCompleted={onClose} />,
              });
              onOpen();
            }}
          >
            Join class
          </Button>
        </Stack>
      </Flex>
      {user.classId.length === 0 ? (
        <Flex w="100%" h="100%" justify="center" align="center">
          <Text>Nothing here</Text>
        </Flex>
      ) : userClasses.length === 0 ? (
        <Flex w="100%" h="100%" justify="center" align="center">
          <Spinner />
        </Flex>
      ) : (
        <Classes>
          <div className="classes-container">
            <h4>Your class</h4>
            {isFetching ? (
              <Flex w="100%" h="50px" justify="center" align="center">
                <Spinner />
              </Flex>
            ) : userClasses["myClasses"].length === 0 ? (
              <Flex w="100%" h="100px" justify="center" align="center">
                <Text>No classes created!</Text>
              </Flex>
            ) : (
              <div className="class-list">
                {userClasses["myClasses"].map((userClass) => (
                  <ClassCard key={userClass.classId} userClass={userClass} />
                ))}
              </div>
            )}
          </div>
          <div className="classes-container">
            <h4>Others</h4>
            {isFetching ? (
              <Flex w="100%" h="100px" justify="center" align="center">
                <Spinner />
              </Flex>
            ) : userClasses["otherClasses"].length === 0 ? (
              <Flex w="100%" h="100px" justify="center" align="center">
                <Text>No classes joined!</Text>
              </Flex>
            ) : (
              <div className="class-list">
                {userClasses["otherClasses"].map((userClass) => (
                  <ClassCard key={userClass.classId} userClass={userClass} />
                ))}
              </div>
            )}
          </div>
        </Classes>
      )}
      {Modal}
    </Stack>
  );
};

export default ClassList;
