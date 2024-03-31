import { Hono } from "hono";
import { renderer } from "./renderer";
import home from "./api/home";
import profile from "./api/profile";
import blog from "./api/blog";
import study from "./api/study";
import { NotFound } from "./components/notFound";

const app = new Hono();

app.use(renderer);

app.route("/", home);
app.route("/profile", profile);
app.route("/blog", blog);
app.route("/study", study);

app.notFound((c) => {
  return c.render(<NotFound />);
});

export default app;
