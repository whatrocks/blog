import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import s from "./style.module.scss";
import Subscribe from "./subscribe";
require("typeface-hind");
require("typeface-lato");
require("typeface-raleway");

const LeftPanel = () => (
  <div className={s.leftPanel}>
    <Link
      to="/"
      className={s.siteLink}
    >
      <h1 className={s.siteHeadline}>
        <span className={s.siteLogo} role="img" aria-label="evergreen-tree">
        🌲
        </span>
        <span>CHARLIE HARRINGTON</span>
      </h1>
    </Link>
    <div>
      <Subscribe />
      <Footer />
    </div>
  </div>
);

const Footer = () => (
  <div className={s.footer}>
    © 2019 Charlie Harrington
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
    <div className={s.rightPanel}>{children}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
