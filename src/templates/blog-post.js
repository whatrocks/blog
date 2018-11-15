import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layouts";
import s from "./style.module.scss";

export default function Template({ data, children }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Helmet
        title={`${post.frontmatter.title} - Charlie Harrington - @whatrocks`}
      />
      <h2 className={s.title}>{post.frontmatter.title}</h2>
      <h3 className={s.subtitle}>{post.frontmatter.date}</h3>
      <hr className={s.borderLine} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div>{children}</div>
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
