import React from 'react'
//import { graphql } from 'gatsby'
//import Img from 'gatsby-image'
import Layout from '../layouts'
import s from './walkingman.module.scss'
import Helmet from 'react-helmet'

export default function Walkingman({ data }) {
  return (
    <Layout>
      <Helmet title="#walkingman" />
      <h1 className={s.title}>#walkingman</h1>
      <p>Unfortunately, the Instagram API changed, so I'll need to source and store these images locally. I knew this was coming, and this is probably a good thing anyway. Hopefully will be back up soon. </p>
    </Layout>
  )
}
/* not working at the moment
export const pageQuery = graphql`
  query walkingmanData {
    allInstagramContent(
      filter: { caption: { text: { regex: "/#walking/" } } }
    ) {
      edges {
        node {
          localImage {
            childImageSharp {
              fixed(width: 250, height: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          link
          location {
            name
          }
          caption {
            text
          }
          images {
            standard_resolution {
              url
            }
          }
        }
      }
    }
  }
`*/
