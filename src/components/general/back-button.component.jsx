import React from "react";
import { IconButton } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const BackButton = () => {
  const history = useHistory();
  return (
    <IconButton
      size="xs"
      aria-label="Go back"
      colorScheme="lavender"
      icon={<ArrowBackIcon />}
      onClick={history.goBack}
    />
  );
};

export default BackButton;
