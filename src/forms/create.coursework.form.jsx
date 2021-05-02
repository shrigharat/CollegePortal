import React from "react";
import styled from "styled-components";

import {
  Input,
  Textarea,
  Stack,
  Box,
  Button,
  FormLabel,
  Select,
  Flex,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import EditIcon from "@material-ui/icons/Edit";

const CreateCourseworkForm = ({ isEditable, formData }) => {
  //isEditable is a prop that is used to set the form editable  from outside this component
  //editing is a prop that is set from within the component to start editing the form
  const [editing, setEditing] = React.useState(isEditable);
  const formik = useFormik({
    initialValues: formData
      ? {
          courseworkTitle: formData.title,
          courseworkDescription: formData.description,
          courseworkFile: formData.courseworkFile,
          courseworkCategory: formData.category,
        }
      : {
          courseworkTitle: "",
          courseworkDescription: "",
          courseworkFile: null,
          courseworkCategory: "",
        },
    onSubmit: (values) => {
      console.log("Create coursework form submitted!");
      console.log("Comparing data is equal ...", compareFormData());
      console.log("Values are: ", { values });
      let courseworkFile = values.courseworkFile;
      console.log("File submitted was: ", courseworkFile);
    },
  });

  const getSelectedCategory = (category) => {
    return category === formik.values.courseworkCategory;
  };

  const compareFormData = () => {
    if (formData) {
      const { title, description, category } = formData;
      const {
        courseworkTitle,
        courseworkDescription,
        courseworkFile,
        courseworkCategory,
      } = formik.values;
      return (
        title === courseworkTitle &&
        description === courseworkDescription &&
        category === courseworkCategory &&
        formData.courseworkFile === courseworkFile
      );
    }
    return false;
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {formData ? (
        <Flex direction="row-reverse">
          <Button
            height="24px"
            p=".8rem"
            rightIcon={<EditIcon />}
            onClick={() => setEditing(!editing)}
            colorScheme="lavender"
          >
            {editing ? "stop editing" : "edit"}
          </Button>
        </Flex>
      ) : null}
      <Stack spacing=".8rem">
        <Box>
          <FormLabel size="xs">Coursework title</FormLabel>
          <Input
            isRequired
            placeholder="enter title"
            focusBorderColor="#6060FF"
            name="courseworkTitle"
            value={formik.values.courseworkTitle}
            onChange={formik.handleChange}
            isReadOnly={!editing}
          />
        </Box>
        <Box>
          <FormLabel>Coursework category</FormLabel>
          <Select
            variant="filled"
            placeholder="Select category"
            focusBorderColor="#6060FF"
            onChange={formik.handleChange}
            name="courseworkCategory"
            isReadOnly={!editing}
          >
            <option
              value="assignment"
              selected={getSelectedCategory("assignment")}
            >
              Assignment
            </option>
            <option value="test" selected={getSelectedCategory("test")}>
              Test
            </option>
            <option
              value="experiment"
              selected={getSelectedCategory("experiment")}
            >
              Experiment
            </option>
          </Select>
        </Box>
        <Box>
          <FormLabel>Coursework description</FormLabel>
          <Textarea
            placeholder="enter description"
            focusBorderColor="#6060FF"
            resize="none"
            name="courseworkDescription"
            value={formik.values.courseworkDescription}
            onChange={formik.handleChange}
            isReadOnly={!editing}
          />
        </Box>
        <Box>
          <FormLabel>Attach file</FormLabel>
          <Box w="90%">
            {formData ? (
              editing ? (
                <input
                  style={{ width: "95%" }}
                  placeholder="choose file"
                  type="file"
                  accept=".pdf, .doc, .pptx, .docx, .txt"
                  name="courseworkFile"
                  isReadOnly={!editing}
                  onChange={(e) => {
                    console.log("coursework File: ", { e });
                    formik.setFieldValue(
                      "courseworkFile",
                      e.currentTarget.files[0]
                    );
                  }}
                />
              ) : (
                <Input
                  placeholder="URL to file"
                  focusBorderColor="#6060FF"
                  name="courseworkFile"
                  onChange={formik.handleChange}
                  isReadOnly={!editing}
                  value={formik.values.courseworkFile}
                />
              )
            ) : (
              <input
                style={{ width: "95%" }}
                placeholder="choose file"
                type="file"
                accept=".pdf, .doc, .pptx, .docx, .txt"
                name="courseworkFile"
                isReadOnly={!editing}
                onChange={(e) => {
                  console.log("coursework File: ", { e });
                  formik.setFieldValue(
                    "courseworkFile",
                    e.currentTarget.files[0]
                  );
                }}
              />
            )}
          </Box>
        </Box>
        <Button
          colorScheme="lavender"
          type="submit"
          isDisabled={compareFormData()}
        >
          Post
        </Button>
        <Box />
      </Stack>
    </form>
  );
};

export default CreateCourseworkForm;
