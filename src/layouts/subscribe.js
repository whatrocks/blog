import React from "react";
import s from "./style.module.scss";

export default () => (
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
    <h4>
      <label htmlFor="tlemail">
        <span role="img" aria-label="wave">
          👋
        </span>
        The almost-never newsletter.
      </label>
    </h4>
    <p>I'll share updates on my writing and coding projects here.</p>
    <input
      className={s.subscribeInput}
      type="text"
      placeholder="ripley@weyland-yutani.com"
      name="email"
      id="tlemail"
    />
    <input type="hidden" value="1" name="embed" />
    <input className={s.subscribeButton} type="submit" value="Subscribe" />
    <p>
      <a
        href="https://tinyletter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by TinyLetter
      </a>
    </p>
  </form>
);
