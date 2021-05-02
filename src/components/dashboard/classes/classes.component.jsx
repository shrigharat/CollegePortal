import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box,
} from "@chakra-ui/react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ClassList from "./class-list.component";
import ClassOverview from "./class-overview.component";

const ClassesComponent = ({ match }) => {
  const breadcrumbLinks = [];

  React.useEffect(
    () => {
      console.log({match});
    }, [match]
  );

  return (
      <Switch>
        <Route exact path={`${match.path}`} component={ClassList} />
        <Route path={`${match.path}/:classId`} component={ClassOverview} />
      </Switch>
  );
};

export default ClassesComponent;

/*
<Breadcrumb mb={4} separator={<ChevronRightIcon />}>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/classes">Classes</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink></BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
*/
