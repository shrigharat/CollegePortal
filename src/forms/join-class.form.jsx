import React from "react";
import {
  Stack,
  Box,
  Input,
  Button,
  FormLabel,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/user.slice";
import {
  fetchCollegeClasses,
  createFirestoreClass,
  updateUserDoc,
} from "../firebase/firebase.functions";

const JoinClassForm = ({actionCompleted}) => {
  const [classes, setClasses] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { id, departmentId, collegeId, classId } = useSelector(selectUser);
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      newClassId: "",
    },
    onSubmit: (values) => {
      console.log("Values: ", values);
      setIsSubmitting(true);
      const isClassJoined = classId.includes(values.newClassId);
      console.log({ isClassJoined });
      if(isClassJoined) {
        setIsSubmitting(false);
        toast({
          title: "Already joined in selected class.",
          status: "info",
          duration: 4000,
          variant: "subtle",
        });
        return;
      }
      updateUserDoc(id, { classId: [...classId, values.newClassId] }).then(
        (response) => {
          setIsSubmitting(false);
          actionCompleted();
          toast({
            title: "Class joined",
            status: "success",
            duration: 4000,
            variant: "subtle",
          });
        }
      );
    },
  });

  React.useEffect(() => {
    fetchCollegeClasses(collegeId).then((response) => {
      setClasses(response);
      console.log("classes for joining: ", response);
    });
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack>
        <Box>
          <FormLabel>Class</FormLabel>
          <Select
            placeholder="select class"
            value={formik.values.newClassId}
            name="newClassId"
            onChange={formik.handleChange}
          >
            {classes.map((c) => (
              <option value={c.classId}>{c.className}</option>
            ))}
          </Select>
        </Box>
        <Box />
        <Button type="submit" colorScheme="lavender" isLoading={isSubmitting}>
          Join
        </Button>
        <Box />
      </Stack>
    </form>
  );
};

export default JoinClassForm;

/*
(createdClassId) => {
        updateUserDoc(id, { classId: [...classId, createdClassId] });
        
      }
*/
