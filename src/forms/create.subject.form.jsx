import React from "react";
import {
  Stack,
  Box,
  Input,
  Button,
  FormLabel,
  useToast,
  Text,
  AlertIcon,
  Alert,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/user.slice";
import {
  createFirestoreSubject,
  updateUserDoc,
} from "../firebase/firebase.functions";

const CreateSubjectForm = ({ classId, closeForm }) => {
  const { id, collegeId } = useSelector(selectUser);
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      subjectName: "",
      subjectCode: "",
    },
    onSubmit: (values) => {
      console.table("Values: ", values);
      createFirestoreSubject(id, classId, values).then(() => {
        closeForm();
        toast({
          title: "Subject was added",
          variant: "subtle",
          status: "info",
          duration: 3000,
        });
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack>
        <Alert status="info">
          <AlertIcon />
          You will be appointed as the instructor for the subject you create!
        </Alert>
        <Box>
          <FormLabel>Subject name</FormLabel>
          <Input
            placeholder="enter subject name"
            value={formik.values.subjectName}
            name="subjectName"
            onChange={formik.handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Subject code</FormLabel>
          <Input
            placeholder="enter subject code"
            value={formik.values.subjectCode}
            name="subjectCode"
            onChange={formik.handleChange}
          />
        </Box>
        <Box />
        <Button type="submit" colorScheme="lavender">
          Create
        </Button>
        <Box />
      </Stack>
    </form>
  );
};

export default CreateSubjectForm;
