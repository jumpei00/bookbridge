import { Hono } from "hono";
import { Home } from "../components/home";

const app = new Hono();

app.get("/", (c) => {
  return c.render(<Home />);
});

export default app;
