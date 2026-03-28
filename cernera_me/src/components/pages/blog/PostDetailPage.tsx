import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import MainNav from "components/nav/MainNav";
import pageStyle from "../Page.module.scss";
import btnStyle from "components/button/Button.module.scss";
import style from "./PostDetailPage.module.scss";

type PostDetail = {
    id: number;
    title: string;
    slug: string;
    body_html: string;
    views: number;
    created_at: string;
    updated_at: string;
};

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "/api";
const CACHE_TTL_MS = 60 * 60 * 1000;

function readCache(slug: string): PostDetail | null {
    try {
        const raw = localStorage.getItem(`post_cache_${slug}`);
        if (!raw) return null;
        const { post, timestamp } = JSON.parse(raw);
        if (Date.now() - timestamp > CACHE_TTL_MS) return null;
        return post;
    } catch {
        return null;
    }
}

function writeCache(slug: string, post: PostDetail): void {
    try {
        localStorage.setItem(`post_cache_${slug}`, JSON.stringify({ post, timestamp: Date.now() }));
    } catch {
        // localStorage unavailable — silently skip
    }
}

const PostDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<PostDetail | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!slug) return;

        const cached = readCache(slug);
        if (cached) {
            setPost(cached);
            return;
        }

        fetch(`${API_BASE}/posts/${slug}/`)
            .then(res => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then((data: PostDetail) => {
                writeCache(slug, data);
                setPost(data);
            })
            .catch(() => setError(true));
    }, [slug]);

    return (
        <div id="PostDetailPage" className={pageStyle["page"]}>
            <div className={pageStyle["page__content"]}>
                <Container className={pageStyle["page__content__container"]}>
                    <MainNav />
                    <div className={style["page-content"]}>
                        <button onClick={() => navigate(-1)} className={btnStyle["btn"]}>
                            &larr; back
                        </button>
                        {error && (
                            <div className={style["status"]}>post not found.</div>
                        )}
                        {post && (
                            <>
                                <div className={style["post-meta"]}>
                                    <div className={style["post-title"]}>{post.title}</div>
                                    <div className={style["post-date"]}>
                                        {new Date(post.created_at).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </div>
                                </div>
                                <div
                                    className={style["post-body"]}
                                    dangerouslySetInnerHTML={{ __html: post.body_html }}
                                />
                            </>
                        )}
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default PostDetailPage;
