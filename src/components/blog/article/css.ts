import { css } from "hono/css";

export const article = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  article {
    width: 40%;
  }

  div {
    white-space: pre-wrap;
  }
`;
