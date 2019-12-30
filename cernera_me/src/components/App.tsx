import React from 'react';
import styles from '../styles/App.module.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import EdwardLandingPage from "./pages/edward/EdwardLandingPage";
import GregoryLandingPage from "./pages/gregory/GregoryLandingPage";
import AboutPage from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <div className={styles["App"]}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/edward" component={EdwardLandingPage} />
          <Route path="/gregory" component={GregoryLandingPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
