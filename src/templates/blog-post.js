import React from "react";
import Helmet from "react-helmet";
import { graphql } from 'gatsby'
import Layout from '../layouts'
import s from './style.module.scss';

export default function Template({ data, children }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
    <div>
      <Helmet
        title={`${post.frontmatter.title} - Charlie Harrington - @whatrocks`}
      />
      <div>
        <h2 className={s.title}>
          {post.frontmatter.title}
        </h2>
        <h3 className={s.subtitle}>
          { post.frontmatter.date }
        </h3>
        <hr
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            background: "none",
            borderTop: "2px solid rgb(238, 238, 238)",
            height: "0"
          }}
        />
        <div
          className="blog-post-content"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div
          className="blog-post-content"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {children}
        </div>
      </div>
    </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
        author
        category
      }
    }
  }
`;
