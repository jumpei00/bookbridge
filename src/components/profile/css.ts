import { css } from "hono/css";

export const profile = css`
  text-align: center;
  margin-top: 48px;
`;

export const profileBasic = css`
  display: flex;
  justify-content: center;

  img {
    width: 10%;
    margin-right: 8px;
  }

  table {
    border-collapse: separate;
    border-spacing: 4px;
    margin-left: 8px;
  }
`;

export const profileIntroduction = css`
  text-align: left;
  width: 50%;
  margin: 0 auto;
  padding-top: 24px;
`;

export const career = css`
  text-align: center;
  margin-top: 48px;

  table {
    margin: 0 auto;
    border-collapse: separate;
    border-spacing: 16px;
  }
`;

export const careerTeble = css`
  text-align: left;
`;

export const skills = css`
  text-align: center;
  margin-top: 48px;

  table {
    margin: 0 auto;
    border-collapse: separate;
    border-spacing: 4px;
  }
`;

export const certification = css`
  text-align: center;
  margin-top: 48px;

  table {
    margin: 0 auto;
    border-collapse: separate;
    border-spacing: 8px;
  }
`;
