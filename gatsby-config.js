module.exports = {
  siteMetadata: {
    title: `Charlie Harrington`,
    siteUrl: `https://www.charlieharrington.com`,
    description: 'Personal website and blog for software engineer and writer Charlie Harrington',
    keywords: ['Charlie Harrington', 'Writer', 'Software Engineer'],
    canonicalUrl: 'https://www.charlieharrington.com',
    social: {
      twitter: '@whatrocks'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_ID}`,
      },
    },
    {
      resolve: `@jamesdanylik/gatsby-source-goodreads`,
      options: {
        key: process.env.GOODREADS_API_KEY,
        id: process.env.GOODREADS_USER_ID
      }
    },
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
              linkImagestoOriginal: true,
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    }
  ]
};