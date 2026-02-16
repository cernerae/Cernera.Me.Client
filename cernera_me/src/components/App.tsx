import React from "react";
import styles from "./App.module.scss";
import {
  userInfoEdward,
  userInfoGregory,
  userInfoRobert,
  userInfoThomas,
} from "info/userInfo";
import { UserInfoType } from "types";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import UserLandingPage from "./pages/users/UserLandingPage";
import ResumePage from "./pages/resume/ResumePage";
import ProjectsPage from "./pages/projects/ProjectsPage";

import * as routes from "routes";

const allUsers: UserInfoType[] = [
  userInfoGregory,
  userInfoEdward,
  userInfoRobert,
  userInfoThomas,
];

const App = () => {
  return (
    <div className={styles["App"]}>
      <Router>
        <Routes>
          <Route
            path={routes.ROUTE_LANDING_PAGE}
            element={<LandingPage users={allUsers} />}
          />
          <Route
            path="/:user"
            element={<UserLandingPage allUsers={allUsers} />}
          />
          <Route
            path={`/:user${routes.PROJECTS_PAGE_RELATIVE}`}
            element={<ProjectsPage allUsers={allUsers} />}
          />
          <Route
            path={`/:user${routes.RESUME_PAGE_RELATIVE}`}
            element={<ResumePage allUsers={allUsers} />}
          />
          <Route
            path="*"
            element={<LandingPage users={allUsers} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
