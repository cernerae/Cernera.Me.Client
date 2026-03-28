import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import MainNav from "components/nav/MainNav";
import { getPostsAction } from "store/actionCreators";
import { getPostsResponse } from "store/selectors";
import pageStyle from "../Page.module.scss";
import btnStyle from "components/button/Button.module.scss";
import style from "./PostsPage.module.scss";

const PostsPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const posts = useSelector(getPostsResponse);

    useEffect(() => {
        if (!posts || posts.length === 0) {
            dispatch(getPostsAction());
        }
    }, [dispatch]);

    const displayPosts = posts ? posts.slice(0, 10) : [];

    return (
        <div id="PostsPage" className={pageStyle["page"]}>
            <div className={pageStyle["page__content"]}>
                <Container className={pageStyle["page__content__container"]}>
                    <MainNav />
                    <div className={style["posts-page"]}>
                        <button
                            onClick={() => navigate(-1)}
                            className={btnStyle["btn"]}
                        >
                            &larr; back
                        </button>
                        <div className={style["posts-heading"]}>posts</div>
                        {!posts && <div className={style["status"]}>loading...</div>}
                        {posts && displayPosts.length === 0 && (
                            <div className={style["status"]}>no posts found</div>
                        )}
                        <div className={style["posts-list"]}>
                            {displayPosts.map(post => (
                                <div
                                    key={post.id}
                                    className={style["post-row"]}
                                    onClick={() => navigate(`/posts/${post.slug}`)}
                                >
                                    <span className={style["post-row__title"]}>{post.title}</span>
                                    <span className={style["post-row__date"]}>
                                        {new Date(post.created_at).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default PostsPage;
