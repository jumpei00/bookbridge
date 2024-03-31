import { FC } from "hono/jsx";
import { headline, blogTitle, pagination } from "./css";

export interface Props {
  page: number;
  isLastPage: boolean;
  headlines: { id: number; title: string; createdAt: string }[];
}

export const Blog: FC<Props> = (props: Props) => {
  return (
    <>
      <h2 class={blogTitle}>Blog</h2>
      {props.headlines.map((h) => {
        return (
          <>
            <div class={headline}>
              <div>{h.createdAt}</div>
              <a href={`/blog/articles/${h.id}`}>{h.title}</a>
            </div>
          </>
        );
      })}
      <ul class={pagination}>
        {props.page > 1 ? (
          <li>
            <a href={`/blog/articles?page=${props.page - 1}`}>Prev</a>
          </li>
        ) : null}
        {props.isLastPage ? null : (
          <li>
            <a href={`/blog/articles?page=${props.page + 1}`}>Next</a>
          </li>
        )}
      </ul>
    </>
  );
};
