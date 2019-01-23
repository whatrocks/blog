import React from "react";
import { Link, graphql } from "gatsby";
import { DateTime } from "luxon";
import Layout from "../layouts";
import s from "./index.module.scss";

export default function Index({ data }) {
  const { edges: mdPosts } = data.allMarkdownRemark;
  const today = DateTime.local();
  return (
    <Layout>
      <div className={s.index}>
        {mdPosts
          .filter(
            post =>
              post.node.frontmatter.title.length > 0 &&
              post.node.frontmatter.isBlogPost
          )
          .map(({ node: post }, index) => {
            const dateOfPost = DateTime.fromISO(post.frontmatter.date);
            const diff = today.diff(dateOfPost, "days").toObject();
            const isNew = diff.days < 14;
            return (
              <Link
                key={index}
                to={post.frontmatter.path}
                className={s.blogLink}
              >
                <div>
                  <span className={s.title}>{post.frontmatter.title}</span>
                  <span className={s.date}>{post.frontmatter.date}</span>
                  {isNew && (
                    <span className={s.badge}>
                      <span className={s.emoji} role="img" aria-label="new">
                        ⚡
                      </span>
                      <span className={s.new}>NEW</span>
                    </span>
                  )}
                </div>
                {post.excerpt.length ? <p className={s.excerpt}>{post.excerpt}</p> : <span />}
              </Link>
            );
          })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            fullPath
            title
            date
            path
            category
            isBlogPost
          }
        }
      }
    }
  }
`;
