import React from 'react';
import { Switch, Route } from "react-router-dom";

import SubjectsList from "./subjects-list.component";
import Class from "./individual-class.component";
import ClassData from "./class-data.component";

const ClassOverview = ({match}) => {
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={ClassData} />
      <Route path={`${match.path}/:subjectId`} component={Class} />
    </Switch>
  );
}

export default ClassOverview;