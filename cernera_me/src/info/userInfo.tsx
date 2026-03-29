import React from "react";
import * as t from "types";
import * as r from "routes";

import edwardProfilePic from "assets/images/profile_pic/ed_profile_pic.png";
import gregoryProfilePic from "assets/images/profile_pic/greg_profile_pic.png";
import robertProfilePic from "assets/images/profile_pic/bob_profile_pic.jpeg";
import thomasProfilePic from "assets/images/profile_pic/tom_profile_pic.jpg";

import django from "assets/images/tech/django_logo.png";
import docker from "assets/images/tech/docker_logo.png";
import kafka from "assets/images/tech/kafka_logo.png";
import elastic from "assets/images/tech/elastic.png";
import nginx from "assets/images/tech/nginx_logo.png";
import python from "assets/images/tech/python_logo.svg";
import react from "assets/images/tech/react_logo.png";
import scala from "assets/images/tech/scala_logo.png";
import tsjs from "assets/images/tech/tsjs_logo.png";

import linux from "assets/images/tech/linux_logo.png";
import java from "assets/images/tech/java_logo.png";
import gradle from "assets/images/tech/gradle_logo.png";
import jenkins from "assets/images/tech/jenkins_logo.png";
import devops from "assets/images/tech/devops.png";
import node from "assets/images/tech/node_logo.png";
import ansible from "assets/images/tech/ansible_logo.png";

import redhat from "assets/images/tech/redhat_logo.png";
import ubuntu from "assets/images/tech/ubuntu_logo.png";
import aws from "assets/images/tech/aws_logo.png";
import mysql from "assets/images/tech/mysql_logo.png";
import postgres from "assets/images/tech/postgres_logo.png";
import redis from "assets/images/tech/redis_logo.png";

import applied from "assets/images/tech/applied_logo_2.jpg";
import comptia from "assets/images/tech/comptia_logo.png";
import office from "assets/images/tech/office_logo.png";
import sharepoint from "assets/images/tech/sharepoint_logo_2.png";
import vertafore from "assets/images/tech/vertafore_logo_2.png";

export const findUser = (
  users: t.UserInfoType[],
  userName: string
): t.UserInfoType | undefined => {
  return users.find((user) => user.name === userName);
};

//////////////////////////////////
//       Social Usernames       //
//////////////////////////////////

export const socialUsernamesEdward: t.SocialMediaUsernamesType = {
  github: "cernerae",
  linkedin: "edwardcernera",
  medium: "https://edward-cernera.medium.com/",
};

export const socialUsernamesGregory: t.SocialMediaUsernamesType = {
  github: "gregorycernera",
  linkedin: "gregorycernera",
  medium: "https://gregorycernera.medium.com/",
};

export const socialUsernamesRobert: t.SocialMediaUsernamesType = {
  github: "OptionAlphaRob",
  linkedin: "robertcernera",
};

export const socialUsernamesThomas: t.SocialMediaUsernamesType = {
  linkedin: "thomasjcernera",
};

//////////////////////////////////
//      Contact Information     //
//////////////////////////////////

export const contactGregory: t.ContactInfoType = {
  personal_email: "cernerag@gmail.com",
  work_email: "gregory.cernera@ibm.com",
};

export const contactEdward: t.ContactInfoType = {
  personal_email: "cernerae@gmail.com",
  work_email: "edward.cernera@avlino.com",
};

export const contactRobert: t.ContactInfoType = {
  personal_email: "rcernera@gmail.com",
  work_email: "rob@optionalpha.com",
};

export const contactThomas: t.ContactInfoType = {
  personal_email: "tjc1788@gmail.com",
  work_email: undefined,
};

//////////////////////////////////
//          Logo Filenames      //
//////////////////////////////////

const LOGO_IBM = "ibm.png";
const LOGO_AVLINO = "avlino4.jpg";
const LOGO_JIKO = "jiko-logo.png";
const LOGO_MONMOUTH = "monmouth_logo.png";
const LOGO_OPTION_ALPHA = "optionalpha3.png";
const LOGO_DOD = "dod.png";
const LOGO_AIR_FORCE = "department_of_air_force.png";
const LOGO_STOCKTON = "stockton2.png";
const LOGO_FAA = "faa.png";
const LOGO_UNIVERSAL_SUPPLY = "universal_supply.png";
const LOGO_TOO_MUCH_MEDIA = "too_much_media.jpg";
const LOGO_CORE_SPECIALTY = "core_specialty.jpg";
const LOGO_BRIEFCASE = "briefcase_icon.png";
const LOGO_ALLIANT = "alliant.png";
const LOGO_PROSIGHT = "prosight.png";
const LOGO_ASSOCIATION_INSURANCE = "association_insurance.png";
const LOGO_GEORGIA_TECH = "georgia2.png";
const LOGO_MARIST = "marist.png";
const LOGO_AFIT = "afit.png";
const LOGO_RUTGERS = "rutgers2.png";
const LOGO_LINCOLN_TECH = "lincolntech_logo.jpg";

//////////////////////////////////
//          Experience          //
//////////////////////////////////

export const careerGregory: t.UserCareerExperienceType[] = [
  {
    name: `IBM`,
    title: `Senior Software Engineer`,
    subtitle: `Sep 2024 - Present`,
    logo: LOGO_IBM,
  },
  {
    name: `IBM`,
    title: `Advisory Software Engineer`,
    subtitle: `Dec 2022 - Sep 2024`,
    logo: LOGO_IBM,
  },
  {
    name: `IBM`,
    title: `Software Engineer`,
    subtitle: `Sep 2021 - Dec 2022`,
    logo: LOGO_IBM,
  },
  {
    name: `IBM`,
    title: `Associate Software Engineer`,
    subtitle: `Jul 2020 - Sep 2021`,
    logo: LOGO_IBM,
  },
  {
    name: `IBM`,
    title: `Back-End Software Developer Intern`,
    subtitle: `May 2019 - Jul 2020`,
    logo: LOGO_IBM,
  },
  {
    name: `Avlino`,
    title: `Software Engineer Intern`,
    subtitle: `May 2018 - August 2018`,
    logo: LOGO_AVLINO,
  },
  {
    name: `Avlino`,
    title: `Data Engineer Intern`,
    subtitle: `May 2017 - August 2017`,
    logo: LOGO_AVLINO,
  },
];

export const careerEdward: t.UserCareerExperienceType[] = [
  {
    name: `Jiko`,
    title: `Senior Software Engineer Team Lead (Brokerage)`,
    subtitle: `June 2022 - Present`,
    logo: LOGO_JIKO,
  },
  {
    name: `Jiko`,
    title: `Senior Software Engineer (Brokerage)`,
    subtitle: `Jan 2022 - June 2022`,
    logo: LOGO_JIKO,
  },
  {
    name: `Avlino`,
    title: `Senior Software Engineer`,
    subtitle: `Feb 2020 - Dec 2021`,
    logo: LOGO_AVLINO,
  },
  {
    name: `Avlino`,
    title: `Software Engineer`,
    subtitle: `Feb 2019 - Feb 2020`,
    logo: LOGO_AVLINO,
  },
  {
    name: `Avlino`,
    title: `Data Engineer`,
    subtitle: `July 2016 - Feb 2019`,
    logo: LOGO_AVLINO,
  },
  {
    name: `Monmouth University`,
    title: `Student Research Assistant (Statistics)`,
    subtitle: `Feb 2016 - June 2016`,
    logo: LOGO_MONMOUTH,
  },
];

export const careerRobert: t.UserCareerExperienceType[] = [
  {
    name: `Option Alpha, LLC`,
    title: `Chief Technology Officer`,
    subtitle: `Nov 2024 - Present`,
    logo: LOGO_OPTION_ALPHA,
  },
  {
    name: `Option Alpha, LLC`,
    title: `Senior Platform Engineer`,
    subtitle: `July 2018 - Nov 2024`,
    logo: LOGO_OPTION_ALPHA,
  },
  {
    name: `Department of Defense`,
    title: `UNIX Interactive Operator`,
    subtitle: `August 2015 - July 2018`,
    logo: LOGO_DOD,
  },
  {
    name: `U.S. Department of the Air Force`,
    title: `Research Assistant`,
    subtitle: `September 2013 - July 2015`,
    logo: LOGO_AIR_FORCE,
  },
  {
    name: `Department of Defense`,
    title: `Software Developer`,
    subtitle: `May to September, 2013 & 2014`,
    logo: LOGO_DOD,
  },
  {
    name: `Rickard Stockton College`,
    title: `Research Assistant`,
    subtitle: `July 2012 - May 2013`,
    logo: LOGO_STOCKTON,
  },
  {
    name: `Federal Aviation Administration`,
    title: `Computer Scientist Intern`,
    subtitle: `May 2012 - August 2012`,
    logo: LOGO_FAA,
  },
  {
    name: `Universal Supply Company, LLC`,
    title: `Jr. Systems Administrator Intern`,
    subtitle: `January 2012 - May 2012`,
    logo: LOGO_UNIVERSAL_SUPPLY,
  },
  {
    name: `Too Much Media, LLC`,
    title: `Web Developer Intern`,
    subtitle: `May 2011 to January 2012`,
    logo: LOGO_TOO_MUCH_MEDIA,
  },
];

export const careerThomas: t.UserCareerExperienceType[] = [
  {
    name: `Core Specialty Insurance Holdings, Inc.`,
    title: `Underwriter`,
    subtitle: `Mar 2021 - Present`,
    logo: LOGO_CORE_SPECIALTY,
  },
  {
    name: `Cernera Brothers Capital, LLC`,
    title: `President`,
    subtitle: `June 2016 - Present`,
    logo: LOGO_BRIEFCASE,
  },
  {
    name: `Alliant Insurance Services`,
    title: `Account Executive`,
    subtitle: `August 2016 - January 2018`,
    logo: LOGO_ALLIANT,
  },
  {
    name: `C.A. Rogers Group, LLC`,
    title: `Account Manager`,
    subtitle: `July 2015 - August 2016`,
    logo: LOGO_BRIEFCASE,
  },
  {
    name: `ProSight Specialty Insurance`,
    title: `Underwriting Assistant`,
    subtitle: `January 2013 - July 2015`,
    logo: LOGO_PROSIGHT,
  },
  {
    name: `Association Insurance Management`,
    title: `Intern`,
    subtitle: `January 2012 - August 2012`,
    logo: LOGO_ASSOCIATION_INSURANCE,
  },
  {
    name: `Best Press, LLC`,
    title: `IT Consultant`,
    subtitle: `2019 - 2010`,
    logo: LOGO_BRIEFCASE,
  },
  {
    name: `Bamm Hollow Country Club`,
    title: `Outside Golf Services`,
    subtitle: `2005 - 2010`,
    logo: LOGO_BRIEFCASE,
  },
];

//////////////////////////////////
//          Education           //
//////////////////////////////////

export const educationGregory: t.UserEducationType[] = [
  {
    name: `Georgia Institute of Technology`,
    title: `M.S. Computer Science — Computing Systems`,
    subtitle: `Class of 2024`,
    logo: LOGO_GEORGIA_TECH,
  },
  {
    name: `Marist University`,
    title: `B.S. Computer Science, Minors Cybersecurity and IT/IS`,
    subtitle: `Class of 2020`,
    logo: LOGO_MARIST,
  },
];

export const educationEdward: t.UserEducationType[] = [
  {
    name: `Monmouth University`,
    title: `B.S. Mathematics, Minor Computer Science`,
    subtitle: `Class of 2016`,
    logo: LOGO_MONMOUTH,
  },
];

export const educationRobert: t.UserEducationType[] = [
  {
    name: `U.S Air Force Institute of Technology`,
    title: `M.S. Cyber Operations`,
    subtitle: `Class of 2015`,
    logo: LOGO_AFIT,
  },

  {
    name: `Stockton University`,
    title: `B.S. Computer Science`,
    subtitle: `Class of 2013`,
    logo: LOGO_STOCKTON,
  },
];

export const educationThomas: t.UserEducationType[] = [
  {
    name: `Rutgers University`,
    title: `B.A. Economics, Minor Italian Studies`,
    subtitle: `Class of 2012`,
    logo: LOGO_RUTGERS,
  },
  {
    name: `Lincoln Tech`,
    title: `Certificate, Computer Systems Networking & Telecommunications`,
    subtitle: `2019-2020`,
    logo: LOGO_LINCOLN_TECH,
  },
];

//////////////////////////////////
//         Publications         //
//////////////////////////////////

export const publicationsEdward: t.UserPublicationType[] = [];
export const publicationsGregory: t.UserPublicationType[] = [];
export const publicationsThomas: t.UserPublicationType[] = [];

export const publicationsRobert: t.UserPublicationType[] = [
  {
    title: `A System-Level Throughput Model for Quantum Key Distribution`,
    subtitle: `Theses and dissertations. 213`,
    author: `Robert Cernera`,
    year: `2015`,
    link: `https://scholar.afit.edu/etd/213`,
  },

  {
    title: `Profiling the Distance Characteristics of Mutation Operators for Permutation-Based Genetic Algorithms`,
    subtitle: `Proceedings of the 26th International FLAIRS Conference on Artificial Intelligence. 46-51`,
    author: `Robert Cernera & Vincent Cicirello`,
    year: `2013`,
    link: `http://www.aaai.org/ocs/index.php/FLAIRS/FLAIRS13/paper/view/5841/6040`,
  },
];

/* Portraits */
const userPortraitThomas: t.UserPortraitType = {
  key: "thomas-portrait",
  displayName: "Thomas",
  description: "IT Specialist",
  image: thomasProfilePic,
  link: r.ROUTE_LANDING_PAGE,
};
const userPortraitRobert: t.UserPortraitType = {
  key: "robert-portrait",
  displayName: "Robert",
  description: "Software Engineer",
  image: robertProfilePic,
  link: r.ROUTE_LANDING_PAGE,
};
const userPortraitEdward: t.UserPortraitType = {
  key: "edward-portrait",
  displayName: "Edward",
  description: "Software Engineer",
  image: edwardProfilePic,
  link: r.ROUTE_LANDING_PAGE,
};
const userPortraitGregory: t.UserPortraitType = {
  key: "gregory-portrait",
  displayName: "Gregory",
  description: "Software Engineer",
  image: gregoryProfilePic,
  link: r.ROUTE_LANDING_PAGE,
};

/* Tech Logos */
const techLogosEdward: t.TechLogoType[] = [
  { image: tsjs, name: "Typescript & JavaScript" },
  { image: react, name: "React" },
  { image: scala, name: "Scala" },
  { image: python, name: "Python" },
  { image: docker, name: "Docker" },
  { image: nginx, name: "NGINX" },
  { image: elastic, name: "Elasticsearch" },
  { image: kafka, name: "Kafka" },
  { image: django, name: "Django" },
];

const techLogosGregory: t.TechLogoType[] = [
  { image: tsjs, name: "Typescript & JavaScript" },
  { image: react, name: "React" },
  { image: python, name: "Python" },
  { image: java, name: "Java" },
  { image: linux, name: "Linux" },
  { image: docker, name: "Docker" },
  { image: gradle, name: "Gradle" },
  { image: jenkins, name: "Jenkins" },
  { image: devops, name: "DevOps" },
  { image: node, name: "NodeJS" },
  { image: ansible, name: "Ansible" },
];

const techLogosRobert: t.TechLogoType[] = [
  { image: tsjs, name: "Typescript & JavaScript" },
  { image: python, name: "Python" },
  { image: nginx, name: "NGINX" },
  { image: java, name: "Java" },
  { image: linux, name: "Linux" },
  { image: node, name: "NodeJS" },
  { image: redhat, name: "RedHat" },
  { image: ubuntu, name: "Ubuntu" },
  { image: aws, name: "AWS" },
  { image: mysql, name: "MySQL" },
  { image: postgres, name: "Postgres" },
  { image: redis, name: "Redis" },
];

const techLogosThomas: t.TechLogoType[] = [
  { image: applied, name: "Applied Systems" },
  { image: comptia, name: "Comptia IT Fundamentals" },
  { image: office, name: "Office" },
  { image: sharepoint, name: "Sharepoint" },
  { image: vertafore, name: "Vertafore" },
];

/* Introduction Text */
const introTextEdward = `
        Senior Software Engineer with 10 years of experience building production-grade services end-to-end. I lead engineering teams,
        own the full lifecycle from architecture to deployment, and thrive in fast-moving startup environments. Currently at Jiko, where
        I lead the Brokerage Engineering Team and drive technical solutions for the Broker-Dealer.`;

const introTextGregory = `
        Senior Software Engineer and architect at IBM, building watsonx Code Assistant for Z, an AI-powered platform redefining how
        organizations modernize their mainframe systems. I focus on back-end architecture, customer success, and technical leadership.
        Previously, I led cryptographic security work on the z/OS Java Security Team, strengthening authentication frameworks and
        secure communication protocols at the OS level.`;

const introTextRobert = `
        I'm very fortunate to have had a career where I could follow my interests.
        Those interests have allowed me to publish academic papers, defend networks,
        lead incident response teams, create big data processing systems, write backend
        microservices for web apps, and most recently, create a platform for retail
        traders to deploy bots in the options market. I never shy away from challenges;
        I seek them out.`;

const introTextThomas = `
        Since earning my Economics degree from Rutgers University, my career has been focused around Commercial Lines insurance -
        particularly in implementing risk management programs for transportation and logistics companies.
        It became clear that cybersecurity and the protection of intangible assets would be one of the greatest challenges
        for every company, both big and small.
        I'm currently working as an Underwriter at Core Specialty Insurance Holdings, using my skills of both insurance and
        IT to optimize my contributions to the company and my clients.`;

/* Projects Text */
const projectsTextEdward = `Here are some of my side projects on GitHub!`;

/* Complete User Objects */
export const userInfoEdward: t.UserInfoType = {
  name: "edward",
  fullName: "Edward Cernera",
  title: "Software Engineer",
  rootRoute: "/edward",
  introText: introTextEdward,
  projectsText: projectsTextEdward,
  careerExperience: careerEdward,
  education: educationEdward,
  publication: publicationsEdward,
  portrait: userPortraitEdward,
  contact: contactEdward,
  techLogos: techLogosEdward,
  socialMedia: socialUsernamesEdward,
  showProjects: true,
  showEmail: false,
};

export const userInfoGregory: t.UserInfoType = {
  name: "gregory",
  fullName: "Gregory Cernera",
  title: "Software Engineer",
  rootRoute: "/gregory",
  introText: introTextGregory,
  careerExperience: careerGregory,
  education: educationGregory,
  publication: publicationsGregory,
  portrait: userPortraitGregory,
  contact: contactGregory,
  techLogos: techLogosGregory,
  socialMedia: socialUsernamesGregory,
  showProjects: true,
  showEmail: false,
};

export const userInfoRobert: t.UserInfoType = {
  name: "robert",
  fullName: "Robert Cernera",
  title: "Software Engineer",
  rootRoute: "/robert",
  introText: introTextRobert,
  careerExperience: careerRobert,
  education: educationRobert,
  publication: publicationsRobert,
  portrait: userPortraitRobert,
  contact: contactRobert,
  techLogos: techLogosRobert,
  socialMedia: socialUsernamesRobert,
  showProjects: false,
  showEmail: false,
};

export const userInfoThomas: t.UserInfoType = {
  name: "thomas",
  fullName: "Thomas Cernera",
  title: "Underwriter & IT Specialist",
  rootRoute: "/thomas",
  introText: introTextThomas,
  careerExperience: careerThomas,
  education: educationThomas,
  publication: publicationsThomas,
  portrait: userPortraitThomas,
  contact: contactThomas,
  techLogos: techLogosThomas,
  socialMedia: socialUsernamesThomas,
  showProjects: false,
  showEmail: false,
};
