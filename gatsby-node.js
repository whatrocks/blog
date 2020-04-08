const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`)

// RSS setup
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField }= actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

/**
 * This function builds our pages during the bootstrap process.
 * We need to fetch all the Markdown posts,
 * and the images within these folders using GraphQL, and then
 * build the pages with the appropriate metadata (e.g. frontmatter)
 */
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  let posts = [];
  // Fetch Markdown posts
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              fullPath
              date
              path
              title
              category
              image
              description
              isBlogPost
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    posts = result.data.allMarkdownRemark.edges.sort((a, b) => {
      if (a.node.frontmatter.date > b.node.frontmatter.date) return -1;
      if (a.node.frontmatter.date > b.node.frontmatter.date) return 1;
      return 0;
    });
    // Fetch the images
    return graphql(`
      {
        allImageSharp {
          edges {
            node {
              id
              original {
                width
                height
                src
              }
              fluid {
                originalName
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      posts.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {
            seoImage: getSEOImage(result.data.allImageSharp.edges, node.frontmatter.image),
          }
        });
      });
    });
  });
};

function getSEOImage(edges, image) {
  for (let i = 0; i < edges.length; i++) {
    const current = edges[i].node.fluid.originalName
    if (current === image) {
      return edges[i].node.original.src
    } 
  }
  return ""
}