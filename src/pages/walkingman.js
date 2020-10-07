import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../layouts";
import s from "./walkingman.module.scss";
import Helmet from "react-helmet";

export default function Walkingman({ data }) {
  const { edges } = data.allInstagramContent;
  return (
    <Layout>
      <Helmet title="#walkingman" />
      <h1 className={s.title}>#walkingman</h1>
      <div className={s.grid}>
        {edges.map((edge, i) => {
          console.log("edge: ", edge);
          if (edge.node.localImage.childImageSharp) {
            return (
              <a
                href={edge.node.media_url}
                rel="noopener noreferrer"
                target="_blank"
                className={s.box}
                key={i}
              >
                <Img
                  style={{
                    marginRight: "0.75rem",
                    height: "250px",
                    width: "250px",
                  }}
                  fluid={edge.node.localImage.childImageSharp.fluid}
                />
                <p className={s.label}>
                  {edge.node.caption.slice(0, edge.node.caption.indexOf("#"))}
                </p>
              </a>
            );  
          } else return (<span />)
        })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query walkingmanData {
    allInstagramContent(filter: { caption: { regex: "/#walking/" } }) {
      edges {
        node {
          localImage {
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 500, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          caption
          media_url
        }
      }
    }
  }
`;
