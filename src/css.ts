import { css } from "hono/css";

export const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;

  h2 {
    margin: 16px 16px;
  }

  nav {
    margin: 16px 16px 16px 0px;

    a {
      text-decoration: none;
      margin: 0 8px;
    }
  }
`;
