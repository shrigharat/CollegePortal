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
  Radio,
  RadioGroup,
  FormLabel,
} from "@chakra-ui/react";
import { useFormik } from "formik";

const PostNotesForm = () => {
  const [radioValue, setRadioValue] = React.useState("0");
  const formik = useFormik({
    initialValues: {
      notesTitle: "",
      notesDescription: "",
      notesUrl: "",
    },
    onSubmit: (values) => {
      console.log("Post notes form submitted!");
      console.log("Values are: ", { values });
    },
  });

  const notesInputChange = (e) => {
    if (radioValue === "0") {
      //URL link was submitted
      console.log("Link is: ", e.target.value);
      formik.setFieldValue('notesUrl', e.target.value);
    } else {
      //File link was submitted
      console.log("File is: ", e.target.files[0]);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing="1rem">
        <Box>
          <FormLabel>Title</FormLabel>
          <Input
            isRequired
            placeholder="enter title"
            focusBorderColor="#6060FF"
            size="md"
            name="notesTitle"
            value={formik.values.notesTitle}
            onChange={formik.handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="enter description"
            focusBorderColor="#6060FF"
            resize="none"
            size="md"
            name="notesDescription"
            value={formik.values.notesDescription}
            onChange={formik.handleChange}
          />
        </Box>
        <RadioGroup value={radioValue} onChange={setRadioValue}>
          <Stack direction="row">
            <Radio value="0" colorScheme="lavender">
              Link
            </Radio>
            <Radio value="1" colorScheme="lavender">
              File
            </Radio>
          </Stack>
        </RadioGroup>

        {radioValue === "0" ? (
          <Box>
            <FormLabel>Resource link</FormLabel>
            <Input
              placeholder="url"
              focusBorderColor="#6060FF"
              onChange={notesInputChange}
            />
          </Box>
        ) : (
          <Box>
            <FormLabel>Resource file</FormLabel>
            <input
              placeholder="choose file"
              type="file"
              onChange={notesInputChange}
            />
          </Box>
        )}
        <Button colorScheme="lavender" type="submit" >Post</Button>
        <Box />
      </Stack>
    </form>
  );
};

export default PostNotesForm;
