import { Hono } from "hono";
import { Profile } from "../components/profile";

const app = new Hono();

app.get("/", (c) => {
  return c.render(<Profile />);
});

export default app;
