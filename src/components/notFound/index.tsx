import { FC } from "hono/jsx";
import { notFound } from "./css";

export const NotFound: FC = () => {
  return (
    <div class={notFound}>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Go back to the home page</a>
    </div>
  );
};
