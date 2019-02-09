import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import SchemaOrg from './SchemaOrg'

const SEO = ({ postData, frontmatter = {}, postImage, isBlogPost }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            canonicalUrl
            image
            author {
              name
            }
            social {
              twitter
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => {
      const postMeta =
        frontmatter || postData.childMarkdownRemark.frontmatter || {};
      const title = postMeta.title || seo.title;
      const description = postMeta.description || seo.description;
      // TODO: Custom image for blog posts isn't working
      // const image = postMeta.image ? `${seo.canonicalUrl}/${postMeta.image}` : seo.image;
      const image = `${seo.canonicalUrl}/${seo.image}`;
      const url = postMeta.slug ? `${seo.canonicalUrl}/${postMeta.slug}` : seo.canonicalUrl
      const datePublished = isBlogPost ? postMeta.date : false;
      return (
        <React.Fragment>
          <Helmet>
            {/* General Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            {isBlogPost ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={seo.social.twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
          </Helmet>
          <SchemaOrg
            isBlogPost={isBlogPost}
            url={url}
            title={title}
            image={image}
            description={description}
            datePublished={datePublished}
            canonicalUrl={seo.canonicalUrl}
            author={seo.author}
            defaultTitle={seo.title}
          />
        </React.Fragment>
      );
    }}
  />
);

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any
    })
  })
};

SEO.defaultProps = {
  isBlogPost: false,
  postData: { childMarkdownRemark: {} },
  postImage: null
};

export default SEO;
