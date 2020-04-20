import React from 'react'
import ReadLink from './read-link'
import { Link } from 'gatsby'

const PostPreview = ({ post }) => (
    <article>
        <h3>
            <Link to={post.slug}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <ReadLink to={post.slug}>Read this post &rarr;</ReadLink>
    </article>
);

export default PostPreview;
