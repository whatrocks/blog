module.exports = {
  siteMetadata: {
    siteUrl: `https://www.charlieharrington.com`,
    title: `Charlie Harrington`,
    twitterHandle: "@whatrocks",
    description: "Blog of Charlie Harrington - writer and software engineer",
    keywords: [
      "Charlie Harrington",
      "charlie Harrington Writer",
      "Charlie Harrington Software Engineer",
      "Charlie Harrington Author",
    ],
    canonicalUrl: "https://www.charlieharrington.com",
    image: "/img/card.png",
    author: {
      name: "Charlie Harrington",
      minibio: `<strong>Charlie Harrington</strong> is a writer and software engineer in San Francisco, CA.`
    },
    social: {
      twitter: "https://twitter.com/whatrocks",
      github: "https://github.com/whatrocks",
      linkedin: "https://www.linkedin.com/in/charlieharrington/",
      instagram: "https://instagram.com/whatrocks",
      goodreads:
        "https://www.goodreads.com/user/show/8699203-charlie-harrington"
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
             {
               allMarkdownRemark(
                 sort: { order: DESC, fields: [frontmatter___date] },
               ) {
                 edges {
                   node {
                     excerpt
                     html
                     fields { slug }
                     frontmatter {
                       title
                       date
                       path
                     }
                   }
                 }
               }
             }
            `,
            output: "/rss.xml",
            title: "Charlie Harrington",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          `${process.env.GOOGLE_ANALYTICS_ID}`, // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
    },
    {
      resolve: `gatsby-source-google-spreadsheets`,
      options: {
        spreadsheetId: `${process.env.GOOGLE_SPREADSHEET_ID}`,
        credentials: {
          type: 'service_account',
          project_id: process.env.GOOGLE_PROJECT_ID,
          private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          client_id: '',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GOOGLE_PROJECT_ID}%40appspot.gserviceaccount.com`,
        }, 
      }
    },
    "gatsby-plugin-use-query-params",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: `${process.env.INSTAGRAM_TOKEN}`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagestoOriginal: true
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    }
  ]
};
