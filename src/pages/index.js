import React from "react";
import Link from "gatsby-link";
import moment from "moment";

export default function Index({ data }) {
  const { edges: mdPosts } = data.allMarkdownRemark;
  const { edges: jsPosts } = data.allJsFrontmatter;
  const { edges: imageEdges } = data.allImageSharp;

  let imageMap = {};
  imageEdges.forEach(edge => {
    const fullPath = edge.node.id.slice(
      edge.node.id.indexOf("2"),
      edge.node.id.indexOf(" ")
    );
    const relPath = edge.node.original.src;
    imageMap[fullPath] = relPath;
  });
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
  const posts = sortedPosts.map(post => {
    let newPost = post;
    newPost.node.indexImage =
      imageMap[
      `${post.node.frontmatter.fullPath}/images/${post.node.frontmatter.image}`
      ];
    return newPost;
  });
  return (
    <div>
      <div style={{ borderBottom: "4px solid green", width: "200px", margin: "0 auto" }}>
        <h4 style={{ textAlign: "center" }}>Latest posts</h4>
      </div>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }, index) => {
          return (
            post.frontmatter.path !== "/react-post" &&
            <div
              key={index}
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
                backgroundColor: "white",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="post"
            >
              <Link
                to={post.frontmatter.path}
                className="indexLink"
                style={{
                  border: "2px solid rgb(238, 238, 238)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <h3 style={{ textAlign: "center", marginBottom: "0.5rem" }}>
                  {post.frontmatter.title}
                </h3>
                <h5 style={{ textAlign: "center" }}>
                  {moment(new Date(post.frontmatter.date)).format("DD MMMM YYYY")}
                </h5>
                {
                  post.frontmatter.title === "Pseudoclassical Star Wars"
                  &&
                  <img
                    style={{
                      maxHeight: "450px",
                      marginTop: "1rem",
                      marginBottom: "0",
                    }}
                    src={"img/subclasswars.gif"}
                  />
                }
                {
                  post.frontmatter.title === "Space Time Travel with Wormie"
                  &&
                  <img
                    style={{
                      maxHeight: "450px",
                      marginTop: "1rem",
                      marginBottom: "0",
                    }}
                    src={"img/WormieLive.gif"}
                  />
                }
                {
                  post.frontmatter.title === "Meet Von Count"
                  &&
                  <img
                    style={{
                      maxHeight: "450px",
                      marginTop: "1rem",
                      marginBottom: "0",
                    }}
                    src={"img/vc.gif"}
                  />
                }
                {
                  post.indexImage
                  &&
                  <img
                    style={{
                      maxHeight: "450px",
                      marginTop: "1rem",
                      marginBottom: "0",
                    }}
                    src={post.indexImage}
                  />
                }
              </Link>
            </div>
          );
        })}
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
            image
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
            image
          }
        }
      }
    }
    allImageSharp {
      edges {
        node {
          id
          original {
            width
            height
            src
          }
        }
      }
    }
  }
`;