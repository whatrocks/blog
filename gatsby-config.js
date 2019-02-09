module.exports = {
  siteMetadata: {
    siteUrl: `https://www.charlieharrington.com`,
    title: `Charlie Harrington`,
    twitterHandle: "@whatrocks",
    description: "Blog of Charlie Harrington - writer and software engineer",
    keywords: [
      "Charlie Harrington",
      "charlie Harrington wWriter",
      "Charlie Harrington Software Engineer",
      "Charlie Harrington Author"
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_ID}`
      }
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
