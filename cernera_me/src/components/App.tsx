import React from 'react';
import styles from 'styles/App.module.scss';
import { socialUsernames, socialUsernamesGregory, contactGregory, contactEdward } from "info/userInfo";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import EdwardLandingPage from "./pages/users/edward/EdwardLandingPage";
import GregoryLandingPage from "./pages/users/gregory/GregoryLandingPage";
import AboutPage from "./pages/about/AboutPage";
import ContactForm from "./pages/contact/ContactForm";
import ResumeForm from "./pages/resume/ResumeForm";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ProjectsPageGregory from "./pages/projects/ProjectsPageGregory";

const App: React.FC = () => {
  return (
    <div className={styles["App"]}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/resume" component={ResumeForm} />

          <Route exact path="/edward" component={EdwardLandingPage} />
          <Route path="/edward/projects" component={() => <ProjectsPage user={"edward"} social={socialUsernames} />} />
          <Route path="/edward/contact" component={() => <ContactForm user={"edward"} social={socialUsernames} contactMe={contactEdward}/>} />
         
          <Route exact path="/gregory" component={GregoryLandingPage} />
          <Route path="/gregory/projects" component={() => <ProjectsPageGregory user={"gregory"} social={socialUsernamesGregory} />} />
          <Route path="/gregory/contact" component={() => <ContactForm user={"gregory"} social={socialUsernamesGregory} contactMe={contactGregory}/>} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
