import React from "react";
import Link from "gatsby-link";
import moment from "moment";

export default function Index({ data }) {
  const { edges: mdPosts } = data.allMarkdownRemark;
  const { edges: jsPosts } = data.allJsFrontmatter;
  let frontmatteredJsPosts = jsPosts
    .filter(post => post.node.data.title)
    .map(post => {
      post.node.frontmatter = post.node.data;
      return post;
    });
  const sortedPosts = mdPosts.concat(frontmatteredJsPosts).sort((a, b) => {
    return (
      new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
    );
  });
  return (
    <div>
      <div style={{ marginTop: "1rem" }}>
        {sortedPosts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }, index) => {
            return (
              post.frontmatter.path !== "/react-post" && (
                <div key={index} style={{ marginBottom: "0.75rem" }}>
                  <Link to={post.frontmatter.path} className="indexLink">
                    <div>
                      <span style={{ fontSize: "1.2rem" }}>
                        {post.frontmatter.title}
                      </span>
                    </div>
                    <div style={{ fontSize: "1rem" }}>
                      {moment(new Date(post.frontmatter.date)).format(
                        "DD MMMM YYYY"
                      )}
                    </div>
                  </Link>
                </div>
              )
            );
          })}
      </div>
    </div>
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
            date(formatString: "MMMM DD, YYYY")
            path
            author
            category
          }
        }
      }
    }
    allJsFrontmatter(sort: { order: DESC, fields: [data___date] }) {
      edges {
        node {
          id
          data {
            fullPath
            path
            date
            author
            title
            category
            excerpt
          }
        }
      }
    }
  }
`;
