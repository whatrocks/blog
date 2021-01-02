import React from "react";
import s from "./style.module.scss";

export default () => (
  <div>
    <form
      className={s.subscribe}
      action="https://tinyletter.com/whatrocks"
      method="post"
      target="popupwindow"
      onSubmit={() => {
        window.open(
          "https://tinyletter.com/whatrocks",
          "popupwindow",
          "scrollbars=yes,width=800,height=600"
        );
        return true;
      }}
    >
      <input
        className={s.subscribeInput}
        type="text"
        placeholder="Get updates on my writing"
        name="email"
        id="tlemail"
      />
      <input type="hidden" value="1" name="embed" />
      <input className={s.subscribeButton} type="submit" value="Update Me 👋" />
    </form>
    <p className={s.warning}>
      The almost-never newsletter. I won't spam you, and you can unsubscribe
      anytime.
    </p>
    <div className={s.copyright}>
      <span>© 2021 Charlie Harrington</span>
      <span> | </span>
      <span>
        <a
          href="https://www.charlieharrington.com/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          RSS feed
        </a>
      </span>
      <span> | </span>
      <span>
        <a
          href="https://www.twitter.com/whatrocks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow @whatrocks on Twitter
        </a>
      </span>
    </div>
  </div>
);
