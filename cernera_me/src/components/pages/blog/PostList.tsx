import React from "react";
import { useNavigate } from "react-router-dom";
import { PostType } from "store/resources/posts/type";
import style from "./PostList.module.scss";

const PostList = ({ posts }: { posts: PostType[] }) => {
    const navigate = useNavigate();

    if (!posts || posts.length === 0) return null;

    return (
        <div className={style["posts-section"]}>
            <div className={style["posts-heading"]}>posts</div>
            <div className={style["posts-grid"]}>
                {posts.map(post => (
                    <div
                        key={post.id}
                        className={style["post-card"]}
                        onClick={() => navigate(`/posts/${post.slug}`)}
                    >
                        <div className={style["post-card__title"]}>{post.title}</div>
                        <div className={style["post-card__date"]}>
                            {new Date(post.created_at).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
