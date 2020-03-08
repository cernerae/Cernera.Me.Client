import * as t from "types";
import * as r from "routes";

import edwardProfilePic from "assets/images/ed_profile_pic.png";
import gregoryProfilePic from "assets/images/greg_profile_pic6.jpg";
import robertProfilePic from "assets/images/bob_profile_pic.jpeg";
import thomasProfilePic from "assets/images/tom_profile_pic.jpg";

import apache_spark from "assets/images/tech/apache_spark_logo.png";
import docker from "assets/images/tech/docker_logo.png";
import hadoop from "assets/images/tech/hadoop_logo.png";
import kafka from "assets/images/tech/kafka_logo.png";
import centos from "assets/images/tech/centos_logo.png";
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

export const findUser = (users: t.UserInfoType[], userName: string): t.UserInfoType | undefined => {
    return users.find(user => user.name === userName)
}

//////////////////////////////////
//       Social Usernames       //
//////////////////////////////////

export const socialUsernamesEdward: t.SocialMediaUsernamesType = {
    github: "cernerae",
    linkedin: "edwardcernera",
    hackerrank: "cernerae",
    gravatar: "cernerae@gmail.com"
}

export const socialUsernamesGregory: t.SocialMediaUsernamesType = {
    github: "gregorycernera",
    linkedin: "gregory-cernera-7930b1140"
}

export const socialUsernamesRobert: t.SocialMediaUsernamesType = {
    github: "OptionAlphaRob",
    linkedin: "robertcernera"
}


export const socialUsernamesThomas: t.SocialMediaUsernamesType = {
    linkedin: "thomasjcernera"
}

//////////////////////////////////
//      Contact Information     //
//////////////////////////////////

export const contactGregory: t.ContactInfoType = {
    personal_email: "cernerag@gmail.com",
    work_email: "gregory.cernera@ibm.com"
}

export const contactEdward: t.ContactInfoType = {
    personal_email: "edward@cernera.me",
    work_email: "edward.cernera@avlino.com"
}

export const contactRobert: t.ContactInfoType = {
    personal_email: "rcernera@gmail.com",
    work_email: ""
}

export const contactThomas: t.ContactInfoType = {
    personal_email: "tjc1788@gmail.com",
    work_email: ""
}


//////////////////////////////////
//          Experience          //
//////////////////////////////////

export const careerGregory: t.UserCareerExperienceType[] = [
    {
        name: `IBM`,
        title: `Back-End Software Developer Intern`,
        subtitle: `May 2019 - Present`,
        logo: 'ibm.png'
    },
    {
        name: `Avlino, Inc.`,
        title: `Software Engineer Intern`,
        subtitle: `May 2017 - August 2018`,
        logo: 'Avlino-Logo-RGB-Cyber-Yellow-Onyx.png'
    },
    {
        name: `The Healthy Palate`,
        title: `IT Specialist`,
        subtitle: `November 2015 - February 2016`,
        logo: 'healthy_palate.PNG'
    },
    {
        name: `Middletown Township`,
        title: `Camp Counselor`,
        subtitle: `June 2015 - August 2016`,
        logo: 'middletown.png'
    }
]

export const careerEdward: t.UserCareerExperienceType[] = [
    {
        name: `Avlino`,
        title: `Senior Software Engineer`,
        subtitle: `Feb 2020 - Present`,
        logo: 'Avlino-Logo-RGB-Cyber-Yellow-Onyx.png'
    },
    {
        name: `Avlino`,
        title: `Software Engineer`,
        subtitle: `Feb 2019 - Feb 2020`,
        logo: 'Avlino-Logo-RGB-Cyber-Yellow-Onyx.png'
    },
    {
        name: `Avlino`,
        title: `Data Engineer`,
        subtitle: `May 2016 - Feb 2019`,
        logo: 'Avlino-Logo-RGB-Cyber-Yellow-Onyx.png'
    },
    {
        name: `Monmouth University`,
        title: `Student Research Assistant (Statistics)`,
        subtitle: `Feb 2016 - June 2016`,
        logo: 'monmouth_logo.png'
    }
]

export const careerRobert: t.UserCareerExperienceType[] = [
    {
        name: `Option Alpha, LLC`,
        title: `Senior Platform Engineer`,
        subtitle: `July 2018 - Present`,
        logo: 'optionalpha1.png'
    },
    {
        name: `Department of Defense`,
        title: `UNIX Interactive Operator`,
        subtitle: `August 2015 - July 2018`,
        logo: 'dod.png'
    },
    {
        name: `U.S. Department of the Air Force`,
        title: `Research Assistant`,
        subtitle: `September 2013 - July 2015`,
        logo: 'department_of_air_force.png'
    },
    {
        name: `Department of Defense`,
        title: `Software Developer`,
        subtitle: `May to September, 2013 & 2014`,
        logo: 'dod.png'
    },
    {
        name: `Rickard Stockton College`,
        title: `Research Assistant`,
        subtitle: `July 2012 - May 2013`,
        logo: 'stockton2.png'
    },
    {
        name: `Federal Aviation Administration`,
        title: `Computer Scientist Intern`,
        subtitle: `May 2012 - August 2012`,
        logo: 'faa.png'
    },
    {
        name: `Universal Supply Company, LLC`,
        title: `Jr. Systems Administrator Intern`,
        subtitle: `January 2012 - May 2012`,
        logo: 'universal_supply.png'
    },
    {
        name: `Too Much Media, LLC`,
        title: `Web Developer Intern`,
        subtitle: `May 2011 to January 2012`,
        logo: 'too_much_media.jpg'
    }
]

export const careerThomas: t.UserCareerExperienceType[] = [
    {
        name: `Cernera Brothers Capital, LLC`,
        title: `President`,
        subtitle: `June 2016 - Present`,
        logo: 'briefcase_icon.png'
    },
    {
        name: `Alliant Insurance Services`,
        title: `Account Executive`,
        subtitle: `August 2016 - January 2018`,
        logo: 'alliant.png'
    },
    {
        name: `C.A. Rogers Group, LLC`,
        title: `Account Manager`,
        subtitle: `July 2015 - August 2016`,
        logo: 'briefcase_icon.png'
    },
    {
        name: `ProSight Specialty Insurance`,
        title: `Underwriting Assistant`,
        subtitle: `January 2013 - July 2015`,
        logo: 'prosight.png'
    },
    {
        name: `Association Insurance Management`,
        title: `Intern`,
        subtitle: `January 2012 - August 2012`,
        logo: 'association_insurance.png'
    },
    {
        name: `Best Press, LLC`,
        title: `IT Consultant`,
        subtitle: `2019 - 2010`,
        logo: 'briefcase_icon.png'
    },
    {
        name: `Bamm Hollow Country Club`,
        title: `Outside Golf Services`,
        subtitle: `2005 - 2010`,
        logo: 'briefcase_icon.png'
    }
]

//////////////////////////////////
//          Education           //
//////////////////////////////////

export const educationGregory: t.UserEducationType[] = [
    {
        name: `Marist College`,
        title: `B.S. Computer Science, Minors Cybersecurity and IT/IS`,
        subtitle: `Class of 2020`,
        logo: 'marist2.png'
    }
]

export const educationEdward: t.UserEducationType[] = [
    {
        name: `Monmouth University`,
        title: `B.S. Mathematics, Minor Computer Science`,
        subtitle: `Class of 2016`,
        logo: 'monmouth_logo.png'
    }
]

export const educationRobert: t.UserEducationType[] = [
    {
        name: `U.S Air Force Institute of Technology`,
        title: `M.S. Cyber Operations`,
        subtitle: `Class of 2015`,
        logo: 'afit.png'
    },

    {
        name: `Stockton University`,
        title: `B.S. Computer Science`,
        subtitle: `Class of 2013`,
        logo: 'stockton2.png'
    }
]

export const educationThomas: t.UserEducationType[] = [
    {
        name: `Rutgers University`,
        title: `B.A. Economics, Minor Italian Studies`,
        subtitle: `Class of 2012`,
        logo: 'rutgers1.png'
    }
]

//////////////////////////////////
//         Publications         //
//////////////////////////////////

export const publicationsEdward: t.UserPublicationType[] = []
export const publicationsGregory: t.UserPublicationType[] = []
export const publicationsThomas: t.UserPublicationType[] = []

export const publicationsRobert: t.UserPublicationType[] = [
    {
        title: `A System-Level Throughput Model for Quantum Key Distribution`,
        subtitle: `Theses and dissertations. 213`,
        author: `Robert Cernera`,
        year: `2015`,
        link: `https://scholar.afit.edu/etd/213`
    },

    {
        title: `Profiling the Distance Characteristics of Mutation Operators for Permutation-Based Genetic Algorithms`,
        subtitle: `Proceedings of the 26th International FLAIRS Conference on Artificial Intelligence. 46-51`,
        author: `Robert Cernera & Vincent Cicirello`,
        year: `2013`,
        link: `http://www.aaai.org/ocs/index.php/FLAIRS
               /FLAIRS13/paper/view/5841/6040`
    }
]

/* Portraits */
const userPortraitThomas: t.UserPortraitType = { key: "thomas-portrait", displayName: "Thomas", description: "IT Specialist", image: thomasProfilePic, link: r.ROUTE_LANDING_PAGE }
const userPortraitRobert: t.UserPortraitType = { key: "robert-portrait", displayName: "Robert", description: "Software Engineer", image: robertProfilePic, link: r.ROUTE_LANDING_PAGE }
const userPortraitEdward: t.UserPortraitType = { key: "edward-portrait", displayName: "Edward", description: "Software Engineer", image: edwardProfilePic, link: r.ROUTE_LANDING_PAGE }
const userPortraitGregory: t.UserPortraitType = { key: "gregory-portrait", displayName: "Gregory", description: "Software Engineer", image: gregoryProfilePic, link: r.ROUTE_LANDING_PAGE }

/* Tech Logos */
const techLogosEdward: t.TechLogoType[] = [
    { image: tsjs, name: "Typescript & JavaScript" },
    { image: react, name: "React" },
    { image: scala, name: "Scala" },
    { image: python, name: "Python" },
    { image: docker, name: "Docker" },
    { image: nginx, name: "NGINX" },
    { image: centos, name: "CentOS" },
    { image: kafka, name: "Kafka" },
    { image: apache_spark, name: "Apache Spark" },
    { image: hadoop, name: "Hadoop" }
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
    { image: ansible, name: "Ansible" }
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
    { image: redis, name: "Redis" }
];

const techLogosThomas: t.TechLogoType[] = []

/* Introduction Text */
const introTextEdward = `
        As a software and data engineer working in the startup world for the last four years, I have been exposed
        to multiple areas of software development. From designing and constructing data analytics pipelines to creating entire
        stacks of web services, I have always been excited about connecting services end to end to understand 
        the greater picture. I enjoy being self-sufficient, but enjoy being part of a motivated team even more.`;

const introTextGregory = `
        At the moment, I am interning as a software engineer at IBM while I finish my senior year at Marist College. 
        Through my internships and education, I have been exposed to projects involving DevOps, data analytics, web development, and data security. Although I specialize in back-end software development,
        I enjoy creating projects like this website that allow me to be creative with the skills I have learned.`;

const introTextRobert = `
        I'm very fortunate to have had a career where I could follow my interests. 
        Those interests have allowed me to publish academic papers, defend networks, 
        lead incident response teams, create big data processing systems, write backend 
        microservices for web apps, and most recently, create a platform for retail 
        traders to deploy bots in the options market. I never shy away from challenges; 
        I seek them out.`;

const introTextThomas = `Hello World`;

/* Complete User Objects */
export const userInfoEdward: t.UserInfoType = {
    name: "edward",
    fullName: "Edward Cernera",
    title: "Software Engineer",
    rootRoute: "/edward",
    introText: introTextEdward,
    careerExperience: careerEdward,
    education: educationEdward,
    publication: publicationsEdward,
    portrait: userPortraitEdward,
    contact: contactEdward,
    techLogos: techLogosEdward,
    socialMedia: socialUsernamesEdward,
    showProjects: true
}

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
    socialMedia: socialUsernamesEdward,
    showProjects: true
}

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
    showProjects: false
}

export const userInfoThomas: t.UserInfoType = {
    name: "thomas",
    fullName: "Thomas Cernera",
    title: "IT Specialist",
    rootRoute: "/thomas",
    introText: introTextThomas,
    careerExperience: careerThomas,
    education: educationThomas,
    publication: publicationsThomas,
    portrait: userPortraitThomas,
    contact: contactThomas,
    techLogos: techLogosThomas,
    socialMedia: socialUsernamesThomas,
    showProjects: false
}