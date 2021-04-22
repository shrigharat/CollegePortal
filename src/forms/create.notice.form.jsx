import React from "react";
import styled from "styled-components";
import moment from "moment";
import {storageRef} from "../firebase/firebase.utils";

import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
  Textarea,
  Stack,
  Box,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useFormik } from "formik";


const Label = styled.div`
  font-weight: 500;
  margin-bottom: .3rem;
`;



const CreateNoticeForm = () => {

  const formik = useFormik({
    initialValues: {
      noticeTitle: "",
      noticeDescription: "",
      noticeFile: null
    },
    onSubmit: (values) => {
      console.log("Create notice form submitted!");
      console.log("Values are: ", { values });
      let file = values.noticeFile;
      console.log("File submitted was: ", file);
    },
  });

  const handleFileSubmit = (e) => {
    console.log("File submitted: ", {e});
  }

  return (
    <form onSubmit={formik.handleSubmit} >
      <Stack spacing="1rem">
      <Box>
        <FormLabel>Notice title</FormLabel>
        <Input
          isRequired
          placeholder="enter title"
          focusBorderColor="#6060FF"
          size="md"
          name="noticeTitle"
          value={formik.values.noticeTitle}
          onChange={formik.handleChange}
        />
      </Box>
      <Box>
        <FormLabel>Notice description</FormLabel>
        <Textarea
          placeholder="enter description"
          focusBorderColor="#6060FF"
          resize="none"
          size="md"
          name="noticeDescription"
          value={formik.values.noticeDescription}
          onChange={formik.handleChange}
        />
      </Box>
      <Box>
        <FormLabel>Attach file</FormLabel>
        <input
          placeholder="choose file"
          type="file"
          name="noticeFile"
          onChange={(e) => {
            console.log("File: ", {e});
            formik.setFieldValue("noticeFile", e.currentTarget.files[0])
          }}
        />
      </Box>
      <Button colorScheme="lavender" type="submit">Post</Button>
      <Box/>
    </Stack>
    </form>
  );
};

export default CreateNoticeForm;
