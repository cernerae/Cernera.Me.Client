export type GitHubRepositoryType = {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export type TechLogoType = {
    image: string;
    name: string;
    description?: string;
}

export type SocialMediaUsernamesType = {
    github?: string;
    linkedin?: string;
    hackerrank?: string;
    gravatar?: string;
}

export type ContactInfoType = {
    personal_email: string;
    work_email?: string;
}

export type UserCareerExperienceType = {
    name: string;
    title: string;
    subtitle: string;
    logo: string;
    description?: string;
}

export type UserEducationType = {
    name: string;
    title: string;
    subtitle: string;
    logo: string;
}

export type UserPortraitType = {
    key: string;
    displayName: string;
    description: string;
    image: string;
    link: string;
}

export type UserRoutesType = {
    root: string;
    projects: string;
    resume: string;
    contact: string;
}

export type UserInfoType = {
    name: string; // Corresponds directly with routing
    fullName: string;
    title: string;
    rootRoute: string;
    introText: string;
    careerExperience: UserCareerExperienceType[];
    education: UserEducationType[];
    portrait: UserPortraitType;
    contact: ContactInfoType;
    techLogos: TechLogoType[];
    socialMedia: SocialMediaUsernamesType;
}

/* Request Types */
export type GetGitHubRepositoriesRequestType = {
    username: string;
}