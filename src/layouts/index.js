import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import s from "./index.css";
import Subscribe from './subscribe';
require("typeface-hind");
require("typeface-lato");
require("typeface-raleway");


const LeftPanel = () => (
  <div
    style={{
      position: 'fixed',
      top: '0',
      left: '0',
      bottom: '0',
      width: '18rem',
      textAlign: 'left',
      padding: '2rem',
      backgroundColor: 'blue',
      borderRight: "2px solid rgb(238, 238, 238)"
    }}
  >
    <Link
      to="/"
      style={{
        textDecoration: "none"
      }}
    >
      <h1 className={s.siteHeadline}>
        <span
          role="img"
          aria-label="evergreen-tree"
        >
        🌲
        </span>
        <span>
          CHARLIE HARRINGTON
        </span>
      </h1>
    </Link>
    <Subscribe />
    <div>
        <span>
          Copyright © Charlie Harrington, 2018. Say hello at @whatrocks on
          <a href="https://www.github.com/whatrocks">GitHub</a>,
          <a href="https://www.twitter.com/whatrocks">Twitter</a>, or
          <a href="https://www.floydhub.com/whatrocks">FloydHub</a>. Or all
          three.
        </span>
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
          content:
            "charlie harrington, whatrocks, javascript, learning, computer science, python, tavie gray"
        }
      ]}
      link={[{ rel: "shortcut icon", href: "/img/favicon.ico" }]}
    />
    <LeftPanel />
    <div
      style={{
        marginLeft: '22rem',
        marginRight: '4rem',
        maxWidth: "38rem",
      }}
    >
      {children}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
