export type GitHubRepository = {
    id: number,
    name: string,
    description: string,
    html_url: string
}

export type TechLogo = {
    image: string,
    name: string,
    description?: string
}

export type SocialMediaUsernames = {
    github?: string,
    linkedin?: string,
    hackerrank?: string,
    gravatar?: string
}

export type ContactInfo = {
    personal_email: string,
    work_email: string
}