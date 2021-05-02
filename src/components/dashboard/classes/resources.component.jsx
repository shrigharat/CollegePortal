import React from "react";
import { Flex, Spinner, Text } from "@chakra-ui/react";

import Tile from "./tile.component";
import useModal from "../../general/modal/modal.component";
import PostNotesForm from "../../../forms/post.notes.form";
import { firestore } from "../../../firebase/firebase.utils";
import moment from "moment";

const Resources = ({ classId, subjectId }) => {
  const [onOpen, setComponent, Modal, onClose] = useModal();
  const [isFetching, setIsFetching] = React.useState(false);
  const [resources, setResources] = React.useState([]);
  console.log({ subjectId });
  console.log(resources);

  React.useEffect(() => {
    setIsFetching(true);
    console.log("Resources useeffect fired");
    return firestore
      .collection(`classes/${classId}/subjects/${subjectId}/notes`)
      .onSnapshot((snapshot) => {
        let resourceArray = [];
        snapshot.docs.forEach((doc) => resourceArray.push(doc.data()));
        setResources(resourceArray);
        setIsFetching(false);
      });
  }, []);

  return isFetching ? (
    <Flex w="100%" h="100%" justify="center" align="center">
      <Spinner />
    </Flex>
  ) : resources.length === 0 ? (
    <Flex w="100%" h="100%" justify="center" align="center">
      <Text>No resources added</Text>
    </Flex>
  ) : (
    <div className="resources-list">
      {resources.map((resource) => (
        <Tile
          key={resource.notesId}
          props={{
            title: resource.notesTitle,
            description: resource.notesDescription,
            postedOn: moment(resource.postedOn.toDate()).calendar(),
            info: {
              title: "Link to resource",
              value: resource.notesUrl,
              type: "link",
            },
          }}
          onClickHandler={() => {
            setComponent({
              title: "Posted resource",
              body: <PostNotesForm subjectId={subjectId}/>,
            });
            onOpen();
          }}
        />
      ))}
      {Modal}
    </div>
  );
};

export default Resources;
