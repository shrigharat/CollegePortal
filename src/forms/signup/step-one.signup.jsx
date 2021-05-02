import React from "react";
import { Stack, Button, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {userLogin} from "../../redux/user/user.slice";

import { signInWithGoogle } from "../../firebase/firebase.utils";
import { userExists, fetchFirestoreUser } from "../../firebase/firebase.functions";

const PhaseOneForm = ({ localDispatch }) => {
  const toast = useToast();
  const history = useHistory();
  const dispatch = useDispatch();
  const signIn = () => {
    const returnValue = signInWithGoogle()
      .then(async (result) => {
        console.log("Result of google login is : ", result);
        const { displayName, email, photoURL, uid } = result.user;
        const userExisting = await userExists(uid);
        if (userExisting) {
          const fetchedUser = await fetchFirestoreUser(uid);
          dispatch(userLogin(fetchedUser));
          toast({
            title: "Logged in",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          history.push("/dashboard");
        } else {
          const { accessToken } = result.credential;
          const userObject = { displayName, email, photoURL, uid, accessToken };
          localDispatch({ type: "stepComplete" });
          localDispatch({ type: "setUser", payload: userObject });
        }
      })
      .catch((e) => {
        console.log("Error is: ", e);
      });
  };

  return (
    <form style={{ height: "100%" }}>
      <Stack
        direction="column"
        justify="center"
        align="center"
        spacing="2rem"
        h="100%"
      >
        <Text fontSize={24} w="80%" textAlign="center" fontWeight="500">
          Quickly create your account by signing in with google
        </Text>
        <Button
          rightIcon={<i style={{ color: "white" }} class="fab fa-google"></i>}
          colorScheme="lavender"
          w="max-content"
          isFullWidth={false}
          onClick={signIn}
        >
          Sign up
        </Button>
      </Stack>
    </form>
  );
};

export default PhaseOneForm;
