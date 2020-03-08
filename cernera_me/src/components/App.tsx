import React from 'react';
import styles from './App.module.scss';
import {
  userInfoEdward, userInfoGregory, userInfoRobert, userInfoThomas
} from "info/userInfo";
import { UserInfoType } from "types";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import UserLandingPage from "./pages/users/UserLandingPage";
import ContactPage from "./pages/contact/ContactPage";
import ResumePage from "./pages/resume/ResumePage";
import ProjectsPage from "./pages/projects/ProjectsPage";

import * as routes from "routes";

const allUsers: UserInfoType[] = [userInfoGregory, userInfoEdward, userInfoRobert] // userInfoThomas]

const App: React.FC = () => {
  return (
    <div className={styles["App"]}>
      <Router>
        <Switch>
          <Route exact
            path={routes.ROUTE_LANDING_PAGE}
            component={() => <LandingPage users={allUsers} />} />

          <Route
            exact path="/:user"
            component={(props: any) => <UserLandingPage username={props.match.params.user} allUsers={allUsers} />} />
          <Route
            path={`/:user${routes.PROJECTS_PAGE_RELATIVE}`}
            component={(props: any) => <ProjectsPage username={props.match.params.user} allUsers={allUsers} />} />
          <Route
            path={`/:user${routes.CONTACT_PAGE_RELATIVE}`}
            component={(props: any) => <ContactPage username={props.match.params.user} allUsers={allUsers} />} />
          <Route
            path={`/:user${routes.RESUME_PAGE_RELATIVE}`}
            component={(props: any) => <ResumePage username={props.match.params.user} allUsers={allUsers} />} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
