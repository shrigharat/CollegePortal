import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
} from "@chakra-ui/react";

import SubjectsList from "./subjects-list.component";
import Timetable from "./timetable.component";
import ClassNotices from "./class-notices.component";
import ClassInfo from "./class-info.component";
import BackButton from "../../general/back-button.component";

const ClassData = () => {

  return (
    <Box w="100%" h="100%">
      <Tabs w="100%" h="100%" colorScheme="lavender">
        <Flex>
          <Flex justify="center" align="center" mr={4}>
            <BackButton />
          </Flex>
          <TabList focusBorderColor="none">
            <Tab _focus={{ outline: "none" }}>Subjects</Tab>
            <Tab _focus={{ outline: "none" }}>Timetable</Tab>
            <Tab _focus={{ outline: "none" }}>Notices</Tab>
            <Tab _focus={{ outline: "none" }}>Info</Tab>
          </TabList>
        </Flex>

        <TabPanels w="100%" h="92%" p={0}>
          <TabPanel w="100%" h="100%">
            <SubjectsList />
          </TabPanel>
          <TabPanel w="100%" h="100%">
            <Timetable />
          </TabPanel>
          <TabPanel w="100%" h="100%">
            <ClassNotices />
          </TabPanel>
          <TabPanel w="100%" h="100%">
            <ClassInfo />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ClassData;
