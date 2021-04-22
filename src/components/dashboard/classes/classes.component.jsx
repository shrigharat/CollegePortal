import React from "react";
import { Switch, Route } from "react-router-dom";

import ClassList from "./class-list.component";
import Class from "./individual-class.component";

const ClassesComponent = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={ClassList} />
      <Route path={`${match.path}/:classId`} component={Class} />
    </Switch>
  );
};

export default ClassesComponent;
