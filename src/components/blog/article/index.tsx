import { FC } from "hono/jsx";
import { article } from "./css";

interface Props {
  title: string;
  body: string;
  createdAt: string;
}

export const Article: FC<Props> = (props: Props) => {
  return (
    <>
      <article class={article}>
        <h2>{props.title}</h2>
        <p>{props.createdAt}</p>
        <div>{props.body}</div>
      </article>
    </>
  );
};
