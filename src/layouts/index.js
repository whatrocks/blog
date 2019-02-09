import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import SEO from '../components/SEO'
import s from "./style.module.scss";

const LeftPanel = () => (
  <div className={s.leftPanel}>
    <div className={s.linkRow}>
      <Link to="/" className={s.siteLink}>
        <h2 className={s.siteHeadline}>
          <span className={s.siteLogo}>
          ¶
          </span>
          <span>Charlie Harrington</span>
        </h2>
      </Link>
      <Link className={s.linkItem} to="/about">
        About
      </Link>
      <span className={s.dot}>•</span>
      <Link className={s.linkItem} to="/library">
        Library
      </Link>
      <span className={s.dot}>•</span>
      <a
        className={s.linkItem}
        href="https://twitter.com/whatrocks"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      htmlAttributes={{ lang: `en` }}
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
        },
        {
          name: "google-site-verification",
          content: `${process.env.GATSBY_GOOGLE_SITE_VERIFICATION}`
        }
      ]}
      link={[{ rel: "shortcut icon", href: "/img/favicon.ico" }]}
    />
    <SEO />
    <LeftPanel />
    <div className={s.rightPanel}>{children}</div>
  </div>
);

TemplateWrapper.propTypes = {
  // TODO: Fix this type
  children: PropTypes.any
};

export default TemplateWrapper;
