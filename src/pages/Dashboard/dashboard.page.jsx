import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "../../components/dashboard/sidebar/sidebar.component";
import DashboardHome from "../../components/dashboard/home/dashboard.home";
import ClassesComponent from "../../components/dashboard/classes/classes.component";

import "./dashboard.styles.scss";

let Schedule = () => (
  <div style={{ width: "100%", height: "100vh", backgroundColor: "red" }}>
    schedule
  </div>
);
let Messages = () => {
  console.log("Messages was mounted");
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "red" }}>
      messages
    </div>
  );
};
let Notifications = () => (
  <div style={{ width: "100%", height: "100vh", backgroundColor: "red" }}>
    notifications
  </div>
);
let Settings = () => (
  <div style={{ width: "100%", height: "100vh", backgroundColor: "red" }}>
    settings
  </div>
);

const Dashboard = ({ match }) => {
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

export default Dashboard;
