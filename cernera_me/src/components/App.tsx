import React from 'react';
import styles from '../styles/App.module.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import EdwardLandingPage from "./pages/edward/EdwardLandingPage";
import GregoryLandingPage from "./pages/gregory/GregoryLandingPage";
import ProjectsPage from "./pages/projects/ProjectsPage";

const App: React.FC = () => {
  return (
    <div className={styles["App"]}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/edward" component={EdwardLandingPage} />
          <Route exact path="/gregory" component={GregoryLandingPage} />
          <Route path="/edward/projects" component={ProjectsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
