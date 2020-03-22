import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import SEO from "../components/SEO";
import Subscribe from "../layouts/subscribe";
import s from "./style.module.scss";

export default function Template({ data, children }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <SEO frontmatter={post.frontmatter} isBlogPost />
      <div className={s.postTemplate}>
        <h2 className={s.title}>{post.frontmatter.title}</h2>
        {post.frontmatter.date && post.frontmatter.date.length && post.frontmatter.date !== "2000-01-01" && <h3 className={s.subtitle}>{post.frontmatter.date}</h3>}
        <div className={s.borderLine} />
        <div
          className={s.post}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className={s.post}>{children}</div>
        <Subscribe />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        category
        description
        image
      }
    }
  }
`;
