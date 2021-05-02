import React from "react";
import {
  Input,
  Box,
  FormLabel,
  FormErrorMessage,
  FormControl,
  Select
} from "@chakra-ui/react";

const MyDropdown = ({ label, touched, error, ...props }) => {
  const { children, ...otherProps } = props;
  return (
    <FormControl isInvalid={touched && error}>
      <FormLabel>{label}</FormLabel>
      <Select {...otherProps}>{children}</Select>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default MyDropdown;
