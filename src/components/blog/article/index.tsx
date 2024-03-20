import { FC } from "hono/jsx";
import { article, body } from "./css";

interface Props {
  title: string;
  body: string;
  created_at: Date;
}

export const Article: FC<Props> = (props: Props) => {
  return (
    <>
      <article class={article}>
        <h2>{props.title}</h2>
        <p>{props.created_at}</p>
        <div class={body}>{props.body}</div>
      </article>
    </>
  );
};
