export type PostType = {
    id: number;
    title: string;
    slug: string;
    views: number;
    created_at: string;
    updated_at: string;
};

export type GetPostsActionType = {
    type: string;
};
