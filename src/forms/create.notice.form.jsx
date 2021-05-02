import React from "react";
import styled from "styled-components";
import moment from "moment";
import { storageRef } from "../firebase/firebase.utils";

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
  RadioGroup,
  Radio,
  useToast
} from "@chakra-ui/react";
import { useFormik } from "formik";
import {selectCurrentClass} from "../redux/current-class/current-class.slice";
import {useSelector} from "react-redux";
import {uploadFileToStorage, createFirestoreNotice} from "../firebase/firebase.functions";

const Label = styled.div`
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const CreateNoticeForm = () => {
  const [radioValue, setRadioValue] = React.useState("0");
  const currentClass = useSelector(selectCurrentClass);
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      noticeTitle: "",
      noticeDescription: "",
      noticeFile: null,
    },
    onSubmit: async (values) => {
      console.log("Create notice form submitted!");
      console.log("Values are: ", { values });
      let fileLink = values.noticeFile;
      if(radioValue==="1") {
        console.log("Üploading file");
        fileLink = await uploadFileToStorage('notices', values.noticeFile);
        console.log("Notice uploaded at: ", fileLink);
      }
      console.log("File link is: ", fileLink);
      createFirestoreNotice(currentClass.classId, {
        title: values.noticeTitle,
        description: values.noticeDescription,
        fileLink,
      }).then((response) => {
        toast({
          title: "Notice posted",
          status: "info",
          duration: 4000,
          variant: "subtle"
        });
      })
    },
  });

  const notesInputChange = (e) => {
    if (radioValue === "0") {
      //URL link was submitted
      console.log("Link is: ", e.target.value);
      formik.setFieldValue("noticeFile", e.target.value);
    } else {
      //File link was submitted
      console.log("File is: ", e.target.files[0]);
      formik.setFieldValue("noticeFile", e.target.files[0]);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
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
            <FormLabel>Enter link</FormLabel>
            <Input
              placeholder="url"
              focusBorderColor="#6060FF"
              onChange={notesInputChange}
            />
          </Box>
        ) : (
          <Box>
            <FormLabel>Attach file</FormLabel>
            <input
              placeholder="choose file"
              type="file"
              onChange={notesInputChange}
            />
          </Box>
        )}
        <Button colorScheme="lavender" type="submit">
          Post
        </Button>
        <Box />
      </Stack>
    </form>
  );
};

export default CreateNoticeForm;
