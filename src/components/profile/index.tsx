import type { FC } from "hono/jsx";
import {
  career,
  careerTeble,
  certification,
  profile,
  profileBasic,
  profileIntroduction,
  skills,
} from "./css";

export const Profile: FC = () => {
  return (
    <>
      <div class={profile}>
        <h2>Profile</h2>
        <div class={profileBasic}>
          <img src="/static/profile/gopher.me.png" />
          <table>
            <tr>
              <td>Name</td>
              <td>Jumpei Motohashi</td>
            </tr>
            <tr>
              <td>Job</td>
              <td>Software Engineer</td>
            </tr>
            <tr>
              <td>Workplace</td>
              <td>
                <a href="https://bizhint.jp" target="_blank">
                  BizHint
                </a>
              </td>
            </tr>
            <tr>
              <td>Location</td>
              <td>Tokyo</td>
            </tr>
            <tr>
              <td>Birthplace</td>
              <td>Hokkaido Sapporo</td>
            </tr>
          </table>
        </div>
        <div class={profileIntroduction}>
          GoとGoogle Cloudが好きなエンジニアです。
          <br />
          BtoB領域でバックエンドエンジニアとして働いています。
          <br />
          仕事では主に、Go、React(Typescript)、Google Cloudを使っています。
          <br />
          趣味はゲーム、映画鑑賞、旅行、酒(ワイン、ウィスキー)です。筋トレと読書を日課としています。
        </div>
      </div>
      <div class={career}>
        <h2>Career & Educational Background</h2>
        <table class={careerTeble}>
          <tr>
            <td>2022/4 ~</td>
            <td>
              株式会社ビズヒント
              <br />
              2022/8にビジョナルインキュベーションから独立
              <br />
              2023/12にスマートキャンプ株式会社とM&A。完全子会社化。
            </td>
          </tr>
          <tr>
            <td>2018/4 ~ 2022/3</td>
            <td>
              株式会社TBSテレビ
              <br />
              放送基幹システムの開発マネージャーや社内DXツールの開発に従事
            </td>
          </tr>
          <tr>
            <td>2016/4 ~ 2018/3</td>
            <td>
              北海道大学大学院 情報科学研究科 メディアネットワーク専攻
              <br />
              修士(情報学)
            </td>
          </tr>
          <tr>
            <td>2012/4 ~ 2016/3</td>
            <td>
              北海道大学 工学部 情報エレクトロニクス学科
              <br />
              学士(情報学)
            </td>
          </tr>
        </table>
      </div>
      <div class={skills}>
        <h2>Skills</h2>
        <table>
          <tr>
            <td>Go</td>
            <td>2 year</td>
            <td>★★★☆☆</td>
          </tr>
          <tr>
            <td>Google Cloud</td>
            <td>2 year</td>
            <td>★★★☆☆</td>
          </tr>
          <tr>
            <td>React & Typescript</td>
            <td>2 year</td>
            <td>★★☆☆☆</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>1 year</td>
            <td>★☆☆☆☆</td>
          </tr>
          <tr>
            <td>AWS</td>
            <td>1 year</td>
            <td>★☆☆☆☆</td>
          </tr>
          <tr>
            <td>Cloudflare</td>
            <td>hobby</td>
            <td>★☆☆☆☆</td>
          </tr>
        </table>
      </div>
      <div class={certification}>
        <h2>Certification</h2>
        <table>
          <tr>
            <td>2023/7 ~ 2025/7</td>
            <td>
              <a
                href="https://google.accredible.com/0a308566-2b73-4a32-83a0-0a5c11e6866c"
                target="_blank"
              >
                Google Cloud Professional Cloud Architect
              </a>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
