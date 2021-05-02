import React from "react";
import {
  Stack,
  Text,
  Box,
  FormLabel,
  Button,
  RadioGroup,
  Radio,
  useToast,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import MyTextInput from "../../components/form-elements/mytext-input";
import MyDropdown from "../../components/form-elements/my-dropdown";
import {
  fetchColleges,
  fetchDepartments,
  createFirestoreClass,
  createFirestoreUser
} from "../../firebase/firebase.functions";
import {
  phaseTwoFormSchema,
  phaseTwoFormInitial,
} from "./form-initialdata";
import {useSelector, useDispatch} from "react-redux";
import {userLogin} from "../../redux/user/user.slice";

const PhaseTwoForm = ({ user }) => {
  const [isClassIncharge, setIsClassIncharge] = React.useState(0);
  console.log("User recieved in step 2 is: ", { user });
  const [colleges, setColleges] = React.useState([]);
  const [selectedCollege, setSelectedCollege] = React.useState("abc");
  const [departments, setDepartments] = React.useState([]);
  const [isFormSubmitting, setIsFormSubmitting] = React.useState(false);
  const toast = useToast();
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const getColleges = async () => {
      const result = await fetchColleges();
      setColleges(result);
    };
    getColleges();
  }, []);

  React.useEffect(() => {
    const getDepartments = async () => {
      const result = await fetchDepartments(selectedCollege);
      setDepartments(result);
      console.log("departments: ", departments);
    };
    getDepartments();
  }, [selectedCollege]);

  return (
    <Formik
      initialValues={phaseTwoFormInitial}
      validationSchema={phaseTwoFormSchema}
      onSubmit={async (values) => {
        setIsFormSubmitting(true);
        let classId;
        if(isClassIncharge==="1") {
          classId = await createFirestoreClass({
            className: `${values.userAssociatedYear}-${values.userAssociatedDivision}`,
            departmentId: values.departmentId,
            classInchargeId: user.uid
          });
        }
        const finalUser = {
          userName: user.displayName,
          userImgUrl: user.photoURL,
          userEmail: user.email,
          id: user.uid,
          accessToken: user.accessToken,
          isClassIncharge: !(isClassIncharge === "0"),
          classId: classId? [classId] : [],
          userType: values.userType,
          collegeId: values.collegeId,
          userDob: values.userDob ,
          userCollegeUid: values.userCollegeUid,
          departmentId: values.departmentId,
        };
        console.log("Final user: ", finalUser);
        const userCreated = await createFirestoreUser(finalUser);
        if(userCreated) {
          dispatch(userLogin(finalUser));
          toast(
            {
              title: "Account created.",
              description: "We've created your account for you.",
              status: "success",
              duration: 4000,
              isClosable: true,
            }
          );

          history.push("/dashboard");
        } else {
          toast(
            {
              title: "Account creation failed!",
              description: "We could not create your account.",
              status: "error",
              duration: 4000,
              isClosable: true,
            }
          );
        }
      }}
    >
      {({ handleChange, touched, errors, values, handleBlur }) => {
        setSelectedCollege(values.collegeId);
        return (
          <Form>
            <Stack
              mt={2}
              direction="column"
              justify="center"
              align="center"
              spacing="1rem"
            >
              <Text
                w={"100%"}
                textAlign="left"
                fontSize={20}
                fontWeight={500}
                color="lavender.500"
                mb={2}
              >
                Enter academic details
              </Text>
              <Box w="100%">
                <MyDropdown
                  focusBorderColor="#6060FF"
                  variant="filled"
                  onChange={handleChange}
                  name="userType"
                  value={values.userType}
                  placeholder="choose role"
                  touched={touched.userType}
                  error={errors.userType}
                  label="Select your role"
                >
                  <option value="STUDENT">Student</option>
                  <option value="FACULTY">Faculty</option>
                </MyDropdown>
              </Box>
              <Box w="100%">
                <MyDropdown
                  focusBorderColor="#6060FF"
                  variant="filled"
                  onChange={handleChange}
                  name="collegeId"
                  value={values.collegeId}
                  placeholder="Select college"
                  touched={touched.collegeId}
                  error={errors.collegeId}
                  label="Select your college/university"
                >
                  {colleges.map((college) => (
                    <option value={college.collegeId}>
                      {college.collegeName}
                    </option>
                  ))}
                </MyDropdown>
              </Box>
              <Box w="100%">
                <MyDropdown
                  focusBorderColor="#6060FF"
                  variant="filled"
                  onChange={handleChange}
                  name="departmentId"
                  placeholder="Select department"
                  touched={touched.departmentId}
                  error={errors.departmentId}
                  label="Select your department"
                >
                  {departments.map((department) => (
                    <option value={department.departmentId}>
                      {department.departmentName}
                    </option>
                  ))}
                </MyDropdown>
              </Box>
              <Stack direction="row" w="100%">
                <Box w="50%">
                  <MyTextInput
                    touched={touched.userCollegeUid}
                    error={errors.userCollegeUid}
                    focusBorderColor="#6060FF"
                    placeholder="eg. 1192ACP12"
                    name="userCollegeUid"
                    onChange={handleChange}
                    value={values.userCollegeUid}
                    onBlur={handleBlur}
                    label="Enter your college UID"
                  />
                </Box>
                <Box w="50%">
                  <MyTextInput
                    focusBorderColor="#6060FF"
                    type="date"
                    onChange={handleChange}
                    name="userDob"
                    value={values.userDob}
                    touched={touched.userDob}
                    error={errors.userDob}
                    onBlur={handleBlur}
                    label="Select date of birth"
                  />
                </Box>
              </Stack>
              <RadioGroup
                w="100%"
                onChange={setIsClassIncharge}
                name="isClassIncharge"
                value={isClassIncharge}
              >
                <Stack pr="16" direction="row" justify="space-between" w="100%">
                  <FormLabel>Are you a class incharge ?</FormLabel>
                  <Stack direction="row" spacing=".5rem">
                    <Radio value="1" colorScheme="lavender">
                      Yes
                    </Radio>
                    <Radio value="0" colorScheme="lavender">
                      No
                    </Radio>
                  </Stack>
                </Stack>
              </RadioGroup>
              <Stack justify="space-between" w="100%" direction="row">
                <Box w="45%">
                  <MyDropdown
                    focusBorderColor="#6060FF"
                    variant="filled"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="userAssociatedYear"
                    placeholder="current year"
                    touched={touched.userAssociatedYear}
                    error={errors.userAssociatedYear}
                    label="Year"
                  >
                    <option value="FE">FE</option>
                    <option value="SE">SE</option>
                    <option value="TE">TE</option>
                    <option value="BE">BE</option>
                  </MyDropdown>
                </Box>
                <Box w="45%">
                  <MyDropdown
                    focusBorderColor="#6060FF"
                    variant="filled"
                    onChange={handleChange}
                    name="userAssociatedDivision"
                    placeholder="division"
                    touched={touched.userAssociatedDivision}
                    error={errors.userAssociatedDivision}
                    label="Division"
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                  </MyDropdown>
                </Box>
              </Stack>
              <Button colorScheme="lavender" type="submit" isLoading={isFormSubmitting}>
                Create Account
              </Button>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PhaseTwoForm;
