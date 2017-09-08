import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import moment from "moment";

export default function Template({ data, children }) {
  const { markdownRemark: post } = data;
  return (
    <div className="blog-post-container">
      <Helmet title={`${post.frontmatter.title} - FloydHub Blog`} />
      <div className="blog-post">
        <h2
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "0.75rem",
            maxWidth: "861px"
          }}
        >
          {post.frontmatter.title}
        </h2>
        <h3
          style={{
            color: "hsla(0, 0%, 0%, .3)",
            textAlign: "center",
            marginBottom: "1.5rem"
          }}
        >
          {moment(new Date(post.frontmatter.date)).format("DD MMMM YYYY")}
        </h3>
        <hr
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "768px",
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
            maxWidth: "768px"
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div
          className="blog-post-content"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "768px"
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        category
      }
    }
  }
`;