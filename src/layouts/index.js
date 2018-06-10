import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

require("typeface-hind");
require("typeface-lora");
require("typeface-raleway");
import "./index.css";

const Header = () => (
  <div
    style={{
      marginBottom: "2rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        paddingTop: "0.5rem",
        paddingBotton: "0.5rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "2px solid rgb(238, 238, 238)"
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none"
        }}
      >
        <h1 style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span
            style={{
              fontFamily: "Raleway",
              fontWeight: 800,
              fontSize: "1.35rem"
            }}
          >
            ¶&nbsp;&nbsp;
          </span>
          <span
            className="ch-name"
            style={{
              fontFamily: "Raleway",
              fontWeight: 800,
              letterSpacing: "0.05rem",
              fontSize: "1.45rem"
            }}
          >
            CHARLIE HARRINGTON
          </span>
        </h1>
      </Link>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Charlie Harrington - @whatrocks"
      meta={[
        {
          name: "description",
          content: "Charlie Harrington - Software Engineer - @whatrocks"
        },
        {
          name: "keywords",
          content: "charlie harrington, whatrocks, javascript, learning"
        }
      ]}
      link={[{ rel: "shortcut icon", href: "/img/favicon.ico" }]}
    />
    <Header />
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "768px",
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
      <div
        style={{
          marginTop: "1rem",
          borderTop: "2px solid rgb(238, 238, 238)",
          paddingTop: "0.75rem",
          textAlign: "center"
        }}
      >
        <span
          style={{
            fontSize: "0.8rem"
          }}
        >
          Copyright © Charlie Harrington, 2018. Say hello at @whatrocks on{" "}
          <a href="https://www.github.com/whatrocks">GitHub</a>,{" "}
          <a href="https://www.twitter.com/whatrocks">Twitter</a>, or{" "}
          <a href="https://www.floydhub.com/whatrocks">FloydHub</a>. Or all
          three.
        </span>
      </div>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
