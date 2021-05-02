import React from "react";
import { Flex, Box, Button, Stack, Spinner } from "@chakra-ui/react";
import Tile from "./tile.component";
import { firestore } from "../../../firebase/firebase.utils";
import { fetchClassLectures } from "../../../firebase/firebase.functions";

const Timetable = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  console.log("Timetable component mounted!");
  const getTodayDayIndex = () => {
    const date = new Date();
    let dayIndex = date.getDay();
    console.log("Day is ", dayIndex);
    if (dayIndex === 0) {
      return 0;
    }
    return dayIndex - 1;
  };
  const day = getTodayDayIndex();
  const [timetable, setTimetable] = React.useState({});
  const [timetableDays, setTimetableDays] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);
  console.log("Days is");
  const [selectedDay, setSelectedDay] = React.useState(day);
  console.log(timetable);

  React.useEffect(() => {
    setIsFetching(true);
    console.log("Timetable fetched");
    fetchClassLectures("Ai6rk20GJbQvFHFwVelk")
      .then((response) => {
        setTimetable(response);
        setTimetableDays(Object.keys(response));
        console.log(response);
        setIsFetching(false);
      })
      .catch((e) => {
        console.log("Error while loading timetable: ", e);
      });
  }, []);

  const getLecturesForDay = (index) => {
    console.log("Getting lectures");
    console.log("Timetable is: ", timetable);
    switch (index) {
      case 0:
        return timetable["Mon"];
      case 1:
        return timetable["Tue"];
      case 2:
        return timetable["Wed"];
      case 3:
        return timetable["Thu"];
      case 4:
        return timetable["Fri"];
      case 5:
        return timetable["Sat"];
      case 6:
        return timetable["Sun"];
      default:
        return timetable["Mon"];
    }
  };

  return isFetching ? (
    <Flex>
      <Spinner />
    </Flex>
  ) : (
    <Flex w="100%" h="100%">
      <Flex direction="column" w="15%" justify="space-between" align="center">
        {timetableDays.map((day, index) => (
          <Button
            _hover={{ bgColor: "#4445AA", color: "white" }}
            color={selectedDay === index ? "white" : "black"}
            bgColor={selectedDay === index ? "#4445AA" : "#bfb2f5"}
            w="100px"
            h="60px"
            onClick={() => setSelectedDay(index)}
          >
            {days[index]}
          </Button>
        ))}
      </Flex>
      <Stack w="85%" overflowY="Scroll">
        {getLecturesForDay(selectedDay).map(
          ({
            lectureTitle,
            lectureLink,
            lectureTimeFrom,
            lectureTimeTo,
            lectureInstructor,
          }) => (
            <Tile
              shouldExpand={true}
              showBadge={true}
              props={{
                title: lectureTitle,
                postedOn: "12-03-2021",
                info: {
                  title: "Scheduled on",
                  value: `${lectureTimeFrom}-${lectureTimeTo}`,
                  type: "string",
                },
                description: "Lecture on snowflake schema",
                link: lectureLink,
              }}
            />
          )
        )}
      </Stack>
    </Flex>
  );
};

export default Timetable;

// getLecturesForDay(selectedDay)
