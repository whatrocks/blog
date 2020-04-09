import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import SEO from "../components/SEO";
import Subscribe from "../layouts/subscribe";
import s from "./style.module.scss";
import Helmet from "react-helmet";

export default function Template({ pageContext, data, children }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Helmet
        meta={[
          {
            name: "description",
            content: `Charlie Harrington: ${post.frontmatter.description}`,
          },
          {
            name: "keywords",
            content:
              "charlie harrington, whatrocks, javascript, learning, computer science, python, tavie gray, escaping web",
          },
        ]}
        link={[{ rel: "shortcut icon", href: "/img/favicon.ico" }]}
      />
      <SEO
        frontmatter={post.frontmatter}
        seoImage={pageContext.seoImage}
        isBlogPost
      />
      <div className={s.postTemplate}>
        <h2 className={s.title}>{post.frontmatter.title}</h2>
        {post.frontmatter.date &&
          post.frontmatter.date.length &&
          post.frontmatter.date !== "2000-01-01" && (
            <h3 className={s.subtitle}>{post.frontmatter.date}</h3>
          )}
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
