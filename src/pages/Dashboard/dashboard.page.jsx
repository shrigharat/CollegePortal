import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Sidebar from "../../components/dashboard/sidebar/sidebar.component";
import DashboardHome from "../../components/dashboard/home/dashboard.home";
import ClassesComponent from "../../components/dashboard/classes/classes.component";
import Notifications from "../../components/dashboard/dashboard-notifications/notifications.component";
import { firestore } from "../../firebase/firebase.utils";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, updateUser } from "../../redux/user/user.slice";

import "./dashboard.styles.scss";

let Schedule = () => <div>schedule</div>;
let Messages = () => {
  console.log("Messages was mounted");
  return <div>messages</div>;
};
let Settings = () => <div>settings</div>;

const Dashboard = ({ match }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  React.useEffect(() => {
    return firestore.doc(`users/${user.id}`).onSnapshot((doc) => {
      console.log("Userdoc updated");
      dispatch(updateUser(doc.data()));
    });
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Switch>
          <Route exact path={`${match.path}`} component={DashboardHome} />
          <Route path={`${match.path}/classes`} component={ClassesComponent} />
          <Route path={`${match.path}/schedule`} component={Schedule} />
          <Route path={`${match.path}/messages`} component={Messages} />
          <Route
            path={`${match.path}/notifications`}
            component={Notifications}
          />
          <Route path={`${match.path}/settings`} component={Settings} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
