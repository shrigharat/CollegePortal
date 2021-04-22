import React from "react";
import styled from "styled-components";
import moment from "moment";

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
  margin-bottom: 0.3rem;
`;

const CreateMeetingForm = () => {
  const formik = useFormik({
    initialValues: {
      meetingTitle: "",
      meetingUrl: "",
      meetingDay: moment().format("YYYY-MM-DD"),
      meetingTimeFrom: "",
      meetingTimeTo: "",
    },
    onSubmit: (values) => {
      console.log("Create meeting form submitted!");
      console.log("Values are: ", { values });
      console.log(
        "Date set was: ",
        moment(`${values.meetingDay}T${values.meetingTimeFrom}`).calendar()
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing="1rem">
        <FormControl>
          <FormLabel>Meeting title</FormLabel>
          <Input
            isRequired
            placeholder="enter title"
            focusBorderColor="#6060FF"
            size="md"
            name="meetingTitle"
            value={formik.values.meetingTitle}
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Meeting URL</FormLabel>
          <Input
            isRequired
            placeholder="enter URL"
            focusBorderColor="#6060FF"
            name="meetingUrl"
            value={formik.values.meetingUrl}
            onChange={formik.handleChange}
          />
        </FormControl>
        <Box>
          <FormLabel>Set meeting day</FormLabel>
          <Input
            placeholder="choose file"
            type="date"
            name="meetingDay"
            value={formik.values.meetingDay}
            onChange={formik.handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Set meeting time</FormLabel>
          <Stack direction="row">
            <FormControl w="50%">
              <span>From</span>
              <Input
                placeholder="choose file"
                type="time"
                name="meetingTimeFrom"
                onChange={formik.handleChange}
                value={formik.values.meetingTimeFrom}
              />
            </FormControl>
            <FormControl w="50%">
              <span>To</span>
              <Input
                placeholder="choose file"
                type="time"
                name="meetingTimeTo"
                onChange={formik.handleChange}
                value={formik.values.meetingTimeTo}
              />
            </FormControl>
          </Stack>
        </Box>
        <Button colorScheme="lavender" type="submit">
          Create
        </Button>
        <Box />
      </Stack>
    </form>
  );
};

export default CreateMeetingForm;
