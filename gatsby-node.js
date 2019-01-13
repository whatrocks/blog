const path = require("path");

/**
 * This function builds our pages during the bootstrap process.
 * We need to fetch all the Markdown posts, Javascript posts,
 * and the images within these folders using GraphQL, and then
 * build the pages with the appropriate metadata (e.g. frontmatter)
 */
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  let markdownPosts = [];
  let javascriptPosts = [];
  let combinedPosts = [];

  // Fetch Markdown posts
  return graphql(`{
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
              markdown
              image
              isBlogPost
            }
          }
        }
      }
    }`).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      markdownPosts = result.data.allMarkdownRemark.edges;

      // Fetch JavaScript posts
      return graphql(`{
        allJavascriptFrontmatter(
          sort: { order: DESC, fields: [frontmatter___date]}
        ) {
            edges {
              node {
                id
                frontmatter {
                  fullPath
                  path
                  date
                  title
                  category
                  markdown
                  image
                  isBlogPost
                }
              }
            }
          }
        }
      `).then(result => {
          // Copy the "data" to "frontmatter" for all JS pages
          // so that our "blog-post.js" template can simply
          // refer to a post's "frontmatter"
          javascriptPosts = result.data.allJavascriptFrontmatter.edges
            .filter(post => post.node.frontmatter.title);

          // Combine and sort the posts by date descending
          combinedPosts = markdownPosts.concat(javascriptPosts).sort((a, b) => {
            if (a.node.frontmatter.date > b.node.frontmatter.date) return -1;
            if (a.node.frontmatter.date > b.node.frontmatter.date) return 1;
            return 0;
          });

          // Fetch the images
          return graphql(`{
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
      }`).then(result => {
              if (result.errors) {
                return Promise.reject(result.errors);
              }

              /**
               * Create a map that will let us get the relative
               * transformed paths of images from within the 
               * JavaScript pages that will look like:
               *  {
               *    `2017-08-02-my-cool-post`: {
               *      `cool-pic.jpeg`: `/static/368623a5815b30d7f824041e617bcfa7.jpeg`,
               *      `taipai.jpg`: `/static/1723781283189128912381.jpeg`,
               *    }
               *  }
               */
              const imageMap = {};
              const images = result.data.allImageSharp.edges.map(edge => {

                // Grab the full path of the page
                // e.g. `2017-08-02-my-cool-post/images/cool-pic.jpeg`
                const fullPath = edge.node.id.slice(
                  edge.node.id.indexOf("2"),
                  edge.node.id.indexOf(" ")
                );

                // Grab the path of the post
                // e.g. `2017-08-02-my-cool-post`
                const postPath = fullPath.slice(0, fullPath.indexOf("/images"));

                // Grab the transformed path that we ultimately want
                // e.g. `/static/368623a5815b30d7f824041e617bcfa7.jpeg`
                const relPath = edge.node.original.src;

                // Grab the original image name
                // e.g. `cool-pic.jpeg`
                const imagePathSplit = fullPath.split("/");
                const imageName = imagePathSplit[imagePathSplit.length - 1];

                if (imageMap[postPath]) {
                  imageMap[postPath][imageName] = relPath;
                } else {
                  imageMap[postPath] = {};
                  imageMap[postPath][imageName] = relPath;
                }
              });

              combinedPosts.forEach(({ node }) => {
                // Create the Markdown pages
                if (node.frontmatter.markdown) {
                  createPage({
                    path: node.frontmatter.path,
                    component: blogPostTemplate,
                    context: {}
                  });
                } else {
                  // Create the Javascript pages, injecting
                  // its images as context so they can be displayed
                  const imagesInPost = imageMap[node.frontmatter.fullPath];
                  createPage({
                    path: node.frontmatter.path,
                    component: path.resolve(
                      `./src/pages/${node.frontmatter.fullPath}/index.js`
                    ),
                    context: { imagesInPost }
                  });
                }
              });
            });
        });
    });
};