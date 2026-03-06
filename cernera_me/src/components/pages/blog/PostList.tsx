import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { PostType } from "store/resources/posts/type";

const PostList = ({ posts }: { posts: PostType[] }) => {
    if (!posts || posts.length === 0) return null;

    return (
        <Row className="mt-5">
            <Col md={12} className="mb-3">
                <h4 style={{ fontWeight: 200, letterSpacing: 4 }}>posts</h4>
            </Col>
            {posts.map(post => (
                <Col key={post.id} md={4} className="mb-4">
                    <Card bg="dark" text="light" className="h-100" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                        <Card.Body>
                            <Card.Title style={{ fontWeight: 300 }}>{post.title}</Card.Title>
                            <Card.Text className="text-muted" style={{ fontSize: "0.8rem" }}>
                                {new Date(post.created_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default PostList;
