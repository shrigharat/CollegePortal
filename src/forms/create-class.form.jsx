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
  fetchDepartments,
  createFirestoreClass,
  updateUserDoc,
} from "../firebase/firebase.functions";

const CreateClassForm = ({ actionCompleted }) => {
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  const [departments, setDepartments] = React.useState([]);
  const { id, classId, collegeId } = useSelector(selectUser);
  const date = new Date();
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      className: "",
      departmentId: "",
      division: "",
      academicYear: `${date.getFullYear()}-${date.getFullYear() - 2000 + 1}`,
    },
    onSubmit: (values) => {
      const { className, departmentId } = values;
      const classObject = {
        className,
        departmentId,
        collegeId,
        classInchargeId: id,
      };
      createFirestoreClass(classObject).then((createdClassId) => {
        updateUserDoc(id, { classId: [...classId, createdClassId] }).then(
          (response) => {
            actionCompleted();
            toast({
              title: "Class created",
              status: "info",
              duration: 4000,
              variant: "subtle",
            });
          }
        );
      });
    },
  });

  React.useEffect(() => {
    fetchDepartments(collegeId).then((response) => setDepartments(response));
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack>
        <Box>
          <FormLabel>Class name</FormLabel>
          <Input
            placeholder="enter class name"
            value={formik.values.className}
            name="className"
            onChange={formik.handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Department</FormLabel>
          <Select
            placeholder="select department"
            value={formik.values.departmentId}
            name="departmentId"
            onChange={formik.handleChange}
          >
            {departments.map(({ departmentName, departmentId }) => (
              <option value={departmentId} key={departmentId}>
                {departmentName}
              </option>
            ))}
          </Select>
        </Box>
        <Box>
          <FormLabel>Division</FormLabel>
          <Input
            placeholder="division"
            value={formik.values.division}
            name="division"
            onChange={formik.handleChange}
          />
        </Box>
        {/* <Box>
          <FormLabel>Semester</FormLabel>
          <Select
            placeholder="select semester"
            value={formik.values.semester}
            name="semester"
            onChange={formik.handleChange}
          >
            {semesters.map((sem) => (
              <option value={sem}>{sem}</option>
            ))}
          </Select>
        </Box> */}
        <Box>
          <FormLabel>Academic year</FormLabel>
          <Input
            placeholder="eg. 2020-21"
            value={formik.values.academicYear}
            name="academicYear"
            onChange={formik.handleChange}
          />
        </Box>
        <Button type="submit" colorScheme="lavender">
          Create
        </Button>
        <Box />
      </Stack>
    </form>
  );
};

export default CreateClassForm;
