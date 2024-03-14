import { Hono } from "hono";
import { renderer } from "./renderer";
import home from "./api/home";
import profile from "./api/profile";
import study from "./api/study";

const app = new Hono();

app.use(renderer);

app.route("/", home);
app.route("/profile", profile);
app.route("/study", study);

export default app;
