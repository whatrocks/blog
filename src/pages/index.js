import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layouts'
import s from './index.module.scss'
import Subscribe from '../layouts/subscribe'

function getCategoryStyle(category) {
  switch (category) {
    case 'design':
      return ['rgb(231,76,60)', '🎨']
    case 'music':
      return ['rgb(52,152,219)', '🎵']
    case 'computers':
      return ['rgb(46,204,113)', '🖥️']
    case 'writing':
      return ['rgb(241,196,15)', '📖']
    case 'learning':
      return ['rgb(40,116,166)', '💡']
    case 'outdoors':
      return ['rgb(14,102,85)', '🕶️']
    case 'talks':
      return ['rgb(175,122,197)', '🤐']
    default:
      return ['blue', '⚡']
  }
}

export default function Index({ data }) {
  const { edges: mdPosts } = data.allMarkdownRemark
  return (
    <Layout>
      <div className={s.index}>
        {mdPosts
          .filter(
            (post) =>
              post.node.frontmatter.title.length > 0 &&
              post.node.frontmatter.isBlogPost
          )
          .map(({ node: post }, index) => {
            const categoryStyles = getCategoryStyle(post.frontmatter.category)
            return (
              <Link
                key={index}
                to={post.frontmatter.path}
                className={s.blogLink}
              >
                <div>
                  <span className={s.title}>{post.frontmatter.title}</span>
                  <span className={s.date}>{post.frontmatter.date}</span>
                </div>
                <div>
                  <span
                    className={s.badge}
                    style={{ backgroundColor: `${categoryStyles[0]}` }}
                  >
                    <span className={s.new}>
                      {post.frontmatter.category.toUpperCase()}
                    </span>
                  </span>
                </div>
              </Link>
            )
          })}
        <Subscribe />
      </div>
    </Layout>
  )
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
            date
            path
            category
            isBlogPost
          }
        }
      }
    }
  }
`
