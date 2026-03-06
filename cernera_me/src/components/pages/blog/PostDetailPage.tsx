import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MainNav from "components/nav/MainNav";
import pageStyle from "../Page.module.scss";
import btnStyle from "components/button/Button.module.scss";

type PostDetail = {
    id: number;
    title: string;
    slug: string;
    body_html: string;
    views: number;
    created_at: string;
    updated_at: string;
};

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

const PostDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<PostDetail | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${API_BASE}/posts/${slug}/`)
            .then(res => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then(setPost)
            .catch(() => setError(true));
    }, [slug]);

    return (
        <div id="PostDetailPage" className={pageStyle["page"]}>
            <div className={pageStyle["page__content"]}>
                <Container className={pageStyle["page__content__container"]}>
                    <MainNav />
                    <Row className="mt-4 mb-3">
                        <Col md={{ span: 8, offset: 2 }}>
                            <button
                                onClick={() => navigate(-1)}
                                className={btnStyle["btn"]}
                            >
                                &larr; back
                            </button>
                        </Col>
                    </Row>
                    {error && (
                        <Row>
                            <Col md={{ span: 8, offset: 2 }}>
                                <p style={{ opacity: 0.6 }}>Post not found.</p>
                            </Col>
                        </Row>
                    )}
                    {post && (
                        <>
                            <Row className="mb-2">
                                <Col md={{ span: 8, offset: 2 }} style={{ textAlign: "center" }}>
                                    <h2 style={{ fontWeight: 200, letterSpacing: 2 }}>{post.title}</h2>
                                    <p style={{ opacity: 0.5, fontSize: "0.85rem" }}>
                                        {new Date(post.created_at).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 8, offset: 2 }}>
                                    <div
                                        className="post-body"
                                        dangerouslySetInnerHTML={{ __html: post.body_html }}
                                        style={{
                                            background: "#fff",
                                            color: "#222",
                                            padding: "2rem",
                                            borderRadius: "4px",
                                            position: "relative",
                                            zIndex: 101,
                                        }}
                                    />
                                </Col>
                            </Row>
                        </>
                    )}
                </Container>
            </div>
        </div>
    );
};

export default PostDetailPage;
