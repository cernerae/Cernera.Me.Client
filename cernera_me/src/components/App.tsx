import React from 'react';
import styles from 'styles/App.module.scss';
import { socialUsernames, socialUsernamesGregory, socialUsernamesRobert, socialUsernamesThomas,
         contactGregory, contactEdward, educationGregory, experienceGregory, educationEdward, 
         contactRobert, contactThomas, experienceEdward, educationRobert, experienceRobert, 
         educationThomas, experienceThomas} from "info/userInfo";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import EdwardLandingPage from "./pages/users/edward/EdwardLandingPage";
import GregoryLandingPage from "./pages/users/gregory/GregoryLandingPage";
import RobertLandingPage from "./pages/users/robert/RobertLandingPage";
import ThomasLandingPage from "./pages/users/thomas/ThomasLandingPage";
import AboutPage from "./pages/about/AboutPage";
import ContactForm from "./pages/contact/ContactForm";
import ResumeForm from "./pages/resume/ResumeForm";

import ProjectsPage from "./pages/projects/ProjectsPage";
import ProjectsPageGregory from "./pages/projects/ProjectsPageGregory";
import ProjectsPageRobert from "./pages/projects/ProjectsPageRobert";
import ProjectsPageThomas from "./pages/projects/ProjectsPageThomas";

const App: React.FC = () => {
  return (
    <div className={styles["App"]}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          

          <Route exact path="/edward" component={EdwardLandingPage} />
          <Route path="/edward/projects" component={() => <ProjectsPage user={"edward"} social={socialUsernames} />} />
          <Route path="/edward/contact" component={() => <ContactForm user={"edward"} social={socialUsernames} contactMe={contactEdward}/>} />
          <Route path="/edward/resume" component={() => <ResumeForm user={"edward"} social={socialUsernames} experience={experienceEdward} education={educationEdward}/>} />
         
          <Route exact path="/gregory" component={GregoryLandingPage} />
          <Route path="/gregory/projects" component={() => <ProjectsPageGregory user={"gregory"} social={socialUsernamesGregory} />} />
          <Route path="/gregory/contact" component={() => <ContactForm user={"gregory"} social={socialUsernamesGregory} contactMe={contactGregory}/>} />
          <Route path="/gregory/resume" component={() => <ResumeForm user={"gregory"} social={socialUsernamesGregory} experience={experienceGregory} education={educationGregory}/>} />
          
          <Route exact path="/robert" component={RobertLandingPage} />
          <Route path="/robert/projects" component={() => <ProjectsPageRobert user={"robert"} social={socialUsernamesRobert} />} />
          <Route path="/robert/contact" component={() => <ContactForm user={"robert"} social={socialUsernamesRobert} contactMe={contactRobert}/>} />
          <Route path="/robert/resume" component={() => <ResumeForm user={"robert"} social={socialUsernamesRobert} experience={experienceRobert} education={educationRobert}/>} />
          

          <Route exact path="/thomas" component={ThomasLandingPage} />
          <Route path="/thomas/projects" component={() => <ProjectsPageThomas user={"thomas"} social={socialUsernamesThomas} />} />
          <Route path="/thomas/contact" component={() => <ContactForm user={"thomas"} social={socialUsernamesThomas} contactMe={contactThomas}/>} />
          <Route path="/thomas/resume" component={() => <ResumeForm user={"thomas"} social={socialUsernamesThomas} experience={experienceThomas} education={educationThomas}/>} />
          

        </Switch>
      </Router>
    </div>
  );
}

export default App;
