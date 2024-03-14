import { Hono } from "hono";
import { Study } from "../components/study";

const app = new Hono();

app.get("/", (c) => {
  return c.render(<Study />);
});

export default app;
