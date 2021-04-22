import React from "react";

import Tile from "./tile.component";

const Resources = () => {
  return (
    <div className="resources-list">
      <Tile
        title={"Computer networks Topology"}
        postedOn={"Posted on 1-04-2021"}
        info={{
          title: "Link to resource",
          value:
            "https://www.youtube.com/watch?v=mMiW-kkK8EA&t=3s&ab_channel=GhubaidaHassani",
          type: "link",
        }}
      />
      <Tile
        title={"Computer networks subnetting"}
        postedOn={"Posted on 1-04-2021"}
        info={{
          title: "Link to resource",
          value:
            "https://www.youtube.com/watch?v=mMiW-kkK8EA&t=3s&ab_channel=GhubaidaHassani",
          type: "link",
        }}
      />
      <Tile
        title={"Computer networks IP addressing"}
        postedOn={"Posted on 1-04-2021"}
        info={{
          title: "Link to resource",
          value:
            "https://www.youtube.com/watch?v=mMiW-kkK8EA&t=3s&ab_channel=GhubaidaHassani",
          type: "link",
        }}
      />
      <Tile
        title={"Computer networks classes of IP"}
        postedOn={"Posted on 1-04-2021"}
        info={{
          title: "Link to resource",
          value:
            "https://www.youtube.com/watch?v=mMiW-kkK8EA&t=3s&ab_channel=GhubaidaHassani",
          type: "link",
        }}
      />
    </div>
  );
};

export default Resources;
