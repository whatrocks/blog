import React from 'react'
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

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
        render={({ site: { siteMetadata: seo }})=> {
            const postMeta = frontmatter || postData.childMarkdownRemark.frontmatter || {}
            const title = postMeta.title || seo.title;
            const description = postMeta.description || seo.description;
            const image = postImage ? `${seo.canonicalUrl}${postImage}` : seo.image;
            // const url = postMeta.slug ? `${seo.canonicalUrl}/${postMeta.slug}` : seo.canonicalUrl
            // const datePublished = isBlogPost ? postMeta.datePublished : false
            return (
                <React.Fragment>
                    <Helmet>
                        {/* General Tags */}
                        <title>{title}</title>
                        <meta name="description" content={description} />
                        <meta name="image" content={image} />

                        {/* Twitter Card tags */}
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:creator" content={seo.social.twitter} />
                        <meta name="twitter:title" content={title} />
                        <meta name="twitter:description" content={description} />
                        <meta name="twitter:image" content={image} />
                    </Helmet>
                </React.Fragment>
            )
        }}
    />
)

SEO.propTypes = {
    isBlogPost: PropTypes.bool,
    postData: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
            frontmatter: PropTypes.any,
            excerpt: PropTypes.any
        })
    }),
    postImage: PropTypes.string,
}

SEO.defaultProps = {
    isBlogPost: false,
    postData: { childMarkdownRemark: {} },
    postImage: null
}

export default SEO;