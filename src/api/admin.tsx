import { Hono } from "hono";
import { csrf } from "hono/csrf";
import { Bindings } from "../config/bindings";

const app = new Hono<{ Bindings: Bindings }>();

app.get("/articles/form", (c) => {
  return c.render(
    <div>
      <form method="post" action="/blog/articles">
        <input type="text" name="title" />
        <textarea name="body"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
});

app.post("/articles", csrf(), async (c) => {
  const now = new Date();
  const res = await c.req.parseBody<{ title: string; body: string }>();
  const { success } = await c.env.DB.prepare(
    "INSERT INTO articles (title, body, created_at, updated_at) VALUES (?, ?, ?, ?)"
  )
    .bind(res.title, res.body, now.toString(), now.toString())
    .run();

  if (success) {
    c.redirect("/blog/articles");
    return;
  }

  c.status(500);
  return c.render(<div>Something went wrong</div>);
});

export default app;
