import React from "react";
import styled from "styled-components";

import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
  Textarea,
  Stack,
  Box,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import { useFormik } from "formik";

const Label = styled.div`
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const CreateAssignmentForm = () => {
  const formik = useFormik({
    initialValues: {
      assignmentTitle: "",
      assignmentDescription: "",
      assignmentFile: null,
    },
    onSubmit: (values) => {
      console.log("Create assignment form submitted!");
      console.log("Values are: ", { values });
      let assignmentFile = values.assignmentFile;
      console.log("File submitted was: ", assignmentFile);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing="1rem">
        <Box>
          <FormLabel>Assignment title</FormLabel>
          <Input
            isRequired
            placeholder="enter title"
            focusBorderColor="#6060FF"
            name="assignmentTitle"
            value={formik.values.assignmentTitle}
            onChange={formik.handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Assignment description</FormLabel>
          <Textarea
            placeholder="enter description"
            focusBorderColor="#6060FF"
            resize="none"
            name="assignmentDescription"
            value={formik.values.assignmentDescription}
            onChange={formik.handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Attach file</FormLabel>
          <input
            placeholder="choose file"
            type="file"
            accept=".pdf, .doc, .pptx, .docx, .txt"
            name="assignmentFile"
            onChange={(e) => {
              console.log("Assignment File: ", { e });
              formik.setFieldValue("assignmentFile", e.currentTarget.files[0]);
            }}
          />
        </Box>
        <Button colorScheme="lavender" type="submit">
          Post
        </Button>
        <Box />
      </Stack>
    </form>
  );
};

export default CreateAssignmentForm;
