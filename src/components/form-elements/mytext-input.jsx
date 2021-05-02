import React from "react";
import {
  Input,
  Box,
  FormLabel,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";
import { useField } from "formik";

const MyTextInput = ({ label, touched, error,  ...props }) => {
  // const [field, meta, helpers] = useField();
  return (
    <FormControl isInvalid={touched && error}>
      <FormLabel>{label}</FormLabel>
      <Input {...props} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default MyTextInput;
