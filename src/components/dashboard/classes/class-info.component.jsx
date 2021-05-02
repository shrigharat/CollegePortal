import React from "react";
import {
  Stack,
  Box,
  InputGroup,
  Input,
  InputLeftAddon,
  Grid,
  GridItem,
  Spinner,
  Flex,
  Text,
  Button,
  Icon,
  useToast,
  Badge,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { selectCurrentClass } from "../../../redux/current-class/current-class.slice";
import { selectUser } from "../../../redux/user/user.slice";
import {
  fetchClassParticipants,
  updateUserDoc,
} from "../../../firebase/firebase.functions";

const ClassInfo = () => {
  const currentClass = useSelector(selectCurrentClass);
  const [participants, setParticipants] = React.useState({
    validParticipants: [],
    invalidParticipants: [],
  });
  const [isFetching, setIsFetching] = React.useState(false);
  const [refetch, setRefetch] = React.useState(false);
  const user = useSelector(selectUser);
  const toast = useToast();

  React.useEffect(() => {
    setIsFetching(true);
    fetchClassParticipants(user.collegeId, currentClass.classId).then((response) => {
      setParticipants(response);
      setIsFetching(false);
      console.log("Participants: ", response);
    });
  }, [refetch]);

  const admitParticipant = (id) => {
    updateUserDoc(id, { isProfileValid: true });
    setRefetch((prev) => !prev);
    toast({
      title: "Participant added",
      status: "success",
      duration: 4000,
      variant: "subtle",
      isClosable: true,
    });
  };

  return (
    <Stack spacing=".5rem">
      <Box>
        <Badge variant="solid">
          <Text fontWeight="semibold" fontSize="1rem">
            Class details
          </Text>
        </Badge>
      </Box>
      <Box>
        <InputGroup>
          <InputLeftAddon children={"Class name"} />
          <Input
            value={currentClass.className}
            isReadOnly={true}
            bgColor="white"
          />
        </InputGroup>
      </Box>
      <Box>
        <InputGroup>
          <InputLeftAddon children={"Academic Year"} />
          <Input value={"2020-21"} isReadOnly={true} bgColor="white" />
        </InputGroup>
      </Box>
      <Box>
        <InputGroup>
          <InputLeftAddon children={"Semester"} />
          <Input value={"6"} isReadOnly={true} bgColor="white" />
        </InputGroup>
      </Box>
      <Box>
        <InputGroup>
          <InputLeftAddon children={"Department"} />
          <Input
            value={currentClass.departmentName}
            isReadOnly={true}
            bgColor="white"
          />
        </InputGroup>
      </Box>
      <Box>
        <InputGroup>
          <InputLeftAddon children={"Participants"} />
          <Input value={"76"} isReadOnly={true} bgColor="white" />
        </InputGroup>
      </Box>
      
      <Box h="1rem" />
      <Box>
        <Badge variant="solid">
          <Text fontWeight="semibold" fontSize="1rem">
            Participants
          </Text>
        </Badge>
      </Box>
      <Box>
        <Badge variant="outline">
          <Text fontWeight="medium" fontSize=".9rem">
            Requests
          </Text>
        </Badge>
      </Box>

      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gap={4}
      >
        {isFetching ? (
          <Flex w="100%" h="50px" justify="center" align="center">
            <Spinner />
          </Flex>
        ) : participants["invalidParticipants"].length == 0 ? (
          <Flex w="100%" h="50px" justify="center" align="center">
            <Text> No requests </Text>
          </Flex>
        ) : (
          participants["invalidParticipants"].map((p) => (
            <Flex
              direction="column"
              h="80px"
              bgColor="white"
              borderRadius=".5rem"
              py={2}
              px={4}
              align="center"
              justify="center"
            >
              <Flex
                w="100%"
                h="100%"
                justify="space-evenly"
                align="Center"
                gap={1}
              >
                <Icon w="10%" as={PersonOutlineIcon} />
                <Box w="2%" />
                <Text
                  w="88%"
                  fontSize="1.05rem"
                  textOverflow="ellipsis"
                  overflow="hidden"
                >
                  {p.userName}
                </Text>
              </Flex>
              <Button
                colorScheme="lavender"
                onClick={() => {
                  admitParticipant(p.id);
                }}
              >
                Admit
              </Button>
            </Flex>
          ))
        )}
      </Grid>
      <Box>
        <Badge variant="outline">
          <Text fontWeight="medium" fontSize=".9rem">
            Admitted
          </Text>
        </Badge>
      </Box>

      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gap={4}
      >
        {isFetching ? (
          <Flex w="100%" h="50px" justify="center" align="center">
            <Spinner />
          </Flex>
        ) : participants["validParticipants"].length === 0 ? (
          <Flex w="100%" h="50px" justify="center" align="center">
            <Text> No admitted participants </Text>
          </Flex>
        ) : (
          participants["validParticipants"].map((p) => (
            <Flex
              boxShadow="md"
              direction="column"
              h="60px"
              bgColor="white"
              borderRadius=".5rem"
              py={2}
              px={4}
              align="center"
              justify="center"
            >
              <Flex w="100%" justify="space-evenly" align="Center" gap={1}>
                <Icon w="10%" as={PersonOutlineIcon} />
                <Box w="6%" />
                <Text w="84%" fontSize="1.05rem" textOverflow="ellipsis">
                  {p.userName}
                </Text>
              </Flex>
            </Flex>
          ))
        )}
      </Grid>
    </Stack>
  );
};

export default ClassInfo;
