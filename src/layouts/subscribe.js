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
    <p>
      <label for="tlemail">
        <span role="img" aria-label="wave">
          👋
        </span>
        Join my almost-never newsletter for updates on projects, writing,
        mascots.
      </label>
    </p>
    <p>
      <input
        className={s.subscribeInput}
        type="text"
        placeholder="ripley@weyland-yutani.com"
        name="email"
        id="tlemail"
      />
    </p>
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
