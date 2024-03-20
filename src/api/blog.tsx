import { Hono } from "hono";
import { Blog } from "../components/blog";
import { Bindings } from "../config/bindings";
import { Article } from "../components/blog/article";

const app = new Hono<{ Bindings: Bindings }>();

app.get("/articles", async (c) => {
  const page = parseInt(c.req.query("page") || "1", 10);
  if (isNaN(page)) {
    c.redirect("/");
    return;
  }

  const perPage = 10;
  const offset = (page - 1) * perPage;

  const countRes = await c.env.DB.prepare(
    "SELECT COUNT(*) as count FROM articles"
  ).first<{ count: number }>();
  if (!countRes) {
    c.render(<div>No articles</div>);
    return;
  }

  const isLastPage = () => {
    const maxPage = Math.ceil(countRes.count / perPage);
    return page >= maxPage;
  };

  const dataRes = await c.env.DB.prepare(
    "SELECT id, title, created_at FROM articles ORDER BY id DESC LIMIT ? OFFSET ?"
  )
    .bind(perPage, offset)
    .all<{ id: number; title: string; created_at: Date }>();

  return c.render(
    <Blog page={page} isLastPage={isLastPage()} headlines={dataRes.results} />
  );
});

app.get("/articles/:id{[1-9]+}", async (c) => {
  const id = parseInt(c.req.param("id"), 10);

  const res = await c.env.DB.prepare(
    "SELECT title, body, created_at FROM articles WHERE id = ?"
  )
    .bind(id)
    .first<{ title: string; body: string; created_at: Date }>();

  if (!res) {
    c.render(<div>Not found</div>);
    return;
  }

  return c.render(
    <Article title={res.title} body={res.body} created_at={res.created_at} />
  );
});

export default app;
