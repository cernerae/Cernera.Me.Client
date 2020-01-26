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
    github: string,
    linkedin: string,
    hackerrank: string,
    gravatar: string | undefined
}

export type ContactInfo = {
    personal_email: string,
    work_email: string
}