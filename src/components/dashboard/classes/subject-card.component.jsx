import React from "react";

import { withRouter, useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Flex,
  Text,
  Image,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentClass,
  selectCurrentClass,
} from "../../../redux/current-class/current-class.slice";
import { deleteClassSubject } from "../../../firebase/firebase.functions";

const SubjectCardStyles = styled.div`
  border-radius: 0.5rem;
  border: none !important;
  overflow: hidden;
  animation: appear-pop .5s ease;
  
  .sub-img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    transform: scale(1);
    transition: transform 0.4s ease;
  }
  .content {
    position: absolute;
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
    color: white;
  }

  &:hover {
    .sub-img {
      transform: scale(1.1);
    }
  }
`;

const SubjectCard = ({ subject, match }) => {
  const { subjectId, subjectName, subjectInstructor, subjectCode } = subject;
  const { classId } = useSelector(selectCurrentClass);
  const history = useHistory();
  const dispatch = useDispatch();
  const toast = useToast();

  const deleteSubject = () => {
    deleteClassSubject(classId, subjectId).then((response) => {
      toast({
        title: "Subject deleted",
        status: 'info',
        duration: 3000,
        variant: "subtle"
      });
    });
  };

  return (
    <SubjectCardStyles>
      <Flex
        key={subjectId}
        direction="column"
        border
        w="100%"
        h="160px"
        justify="space-between"
        align="flex-end"
        cursor="pointer"
        position="relative"
        borderRadius=".7rem"
        transition=".2s ease"
      >
        <Image
          className="sub-img"
          src="https://cdn.dribbble.com/users/13754/screenshots/10514046/media/75036ca28a43caf66b984a250bd1b39b.png?compress=1&resize=800x600"
        />
        <Menu zIndex="5">
          <MenuButton
            position="absolute"
            top="2px"
            right="2px"
            zIndex="5"
            as={IconButton}
            icon={<MoreVertIcon />}
            variant="ghost"
            colorScheme="whiteAlpha"
            _focus={{ outline: "none" }}
          />
          <MenuList colorScheme="whiteAlpha" w="80px">
            <MenuItem>Edit</MenuItem>
            <MenuItem onClick={deleteSubject}>Delete</MenuItem>
          </MenuList>
        </Menu>
        <div
          className="content"
          onClick={() => {
            dispatch(setCurrentClass(subject));
            history.push(`${match.url}/${subjectId}`);
          }}
        >
          <Text fontWeight="semibold" fontSize={24}>
            {subjectName}
          </Text>
          <span>
            <Text fontWeight="medium" fontSize={18}>
              {subjectInstructor.userName}
            </Text>
            <Text fontWeight="medium" fontSize={18}>
              {subjectCode}
            </Text>
          </span>
        </div>
      </Flex>
    </SubjectCardStyles>
  );
};

export default withRouter(SubjectCard);
