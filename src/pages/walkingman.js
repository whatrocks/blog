import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../layouts";
import s from "./walkingman.module.scss";

export default function Walkingman({ data }) {
  const { edges } = data.allInstagramContent;
  return (
    <Layout>
      <h2 className={s.title}>#walkingman</h2>
      <div className={s.grid}>
        {edges.map((edge, i) => (
          <a
            href={edge.node.link}
            rel="noopener noreferrer"
            target="_blank"
            className={s.box}
            key={i}
          >
            <Img
              style={{
                marginRight: "0.75rem",
                height: "250px",
                width: "250px"
              }}
              fixed={edge.node.localImage.childImageSharp.fixed}
            />
            <p className={s.label}>{edge.node.location.name}</p>
          </a>
        ))}
      </div>
    </Layout>
  );
}

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
`;
