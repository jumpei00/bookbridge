import { jsxRenderer } from "hono/jsx-renderer";
import { header } from "./css";
import { Style } from "hono/css";

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>BookBridge</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@200&display=swap"
          rel="stylesheet"
        ></link>
        <link href="/static/css/style.css" rel="stylesheet" />
        <link href="/static/favicon.ico" rel="icon" />
        <Style />
      </head>
      <body>
        <header class={header}>
          <h2>BookBridge Tech</h2>
          <nav>
            <a href="/">Home</a>
            <a href="/profile">Profile</a>
            <a href="/blog/articles">Blog</a>
            <a href="/study">Study</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
});
