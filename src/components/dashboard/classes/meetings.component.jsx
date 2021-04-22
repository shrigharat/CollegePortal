import React from "react";

import Tile from "./tile.component";

const Meetings = () => {
  return (
    <div className="resources-list">
      <Tile
        title={"Computer networks lecture 2"}
        postedOn={"Posted on 1-04-2021"}
        info={{title: "Scheduled time", value: "1:00 PM to 2:00 PM", type: "string"}}
      />
      <Tile
        title={"Computer networks lecture 3"}
        postedOn={"Posted on 1-04-2021"}
        info={{title: "Scheduled time", value: "2:00 PM to 3:00 PM", type: "string"}}
      />
      <Tile
        title={"Computer networks lecture 4"}
        postedOn={"Posted on 1-04-2021"}
        info={{title: "Scheduled time", value: "3:00 PM to 4:00 PM", type: "string"}}
      />
      <Tile
        title={"Computer networks lecture 5"}
        postedOn={"Posted on 1-04-2021"}
        info={{title: "Scheduled time", value: "4:00 PM to 5:00 PM", type: "string"}}
      />
    </div>
  );
};

export default Meetings;
