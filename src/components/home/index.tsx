import type { FC } from "hono/jsx";
import {
  article,
  github,
  linkedin,
  repository,
  sns,
  title,
  x,
  zenn,
} from "./css";

export const Home: FC = () => {
  return (
    <>
      <div class={title}>
        <h1>Welcome to my page!!</h1>
        <h3>This site is running on Cloudflare Pages.</h3>
        <h3>
          This page repository →{" "}
          <a href="https://github.com/jumpei00/bookbridge" target="_blank">
            here!!
          </a>
        </h3>
      </div>
      <div class={sns}>
        <div style={{ marginBottom: "12px" }}>SNS</div>
        <a href="https://twitter.com/jumpei_00" target="_blank">
          <img src="/static/icons/x.png" alt="X" class={x} />
        </a>
        <a
          href="https://www.linkedin.com/in/%E8%AB%84%E5%B9%B3-%E6%9C%AC%E6%A9%8B-a2249a200/"
          target="_blank"
        >
          <img
            src="/static/icons/linkedin.png"
            alt="Linkedin"
            class={linkedin}
          />
        </a>
      </div>
      <div class={repository}>
        <div style={{ marginBottom: "12px" }}>GitHub</div>
        <a href="https://github.com/jumpei00" target="_blank">
          <img src="/static/icons/github.png" alt="GitHub" class={github}></img>
        </a>
      </div>
      <div class={article}>
        <div style={{ marginBottom: "12px" }}>Article</div>
        <a href="https://zenn.dev/jumpei00" target="_blank">
          <img src="/static/icons/zenn.png" alt="Zenn" class={zenn}></img>
        </a>
      </div>
    </>
  );
};
