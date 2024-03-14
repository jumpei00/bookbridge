import { FC } from "hono/jsx";
import { book } from "./css";

export const Study: FC = () => {
  return (
    <>
      <div class={book}>
        <h2>Books I have read</h2>
        <div>
          <h3>Go</h3>
          <ul>
            <li>Go言語100Tips</li>
            <li>Go言語プログラミングエッセンス</li>
            <li>実用Go言語</li>
            <li>Go言語による並行処理</li>
            <li>プログラミングGo実践入門</li>
            <li>エキスパートたちのGo言語</li>
            <li>現場で使える実践テクニックみんなのGo言語</li>
          </ul>
        </div>
        <div>
          <h3>Architecture</h3>
          <ul>
            <li>システム設計の面接試験</li>
            <li>マイクロサービスパターン</li>
            <li>モノリスからマイクロサービスへ</li>
            <li>ドメイン駆動設計入門</li>
            <li>Clean Architecture</li>
          </ul>
        </div>
        <div>
          <h3>Web</h3>
          <ul>
            <li>Web APIの設計</li>
            <li>Webを支える技術</li>
          </ul>
        </div>
        <div>
          <h3>Database</h3>
          <ul>
            <li>データ指向アプリケーションデザイン</li>
            <li>達人に学ぶDB設計徹底指南書</li>
            <li>達人に学ぶSQL徹底指南書</li>
            <li>SQLゼロからはじめるデータベース操作</li>
            <li>RDB技術者のためNoSQLガイド</li>
          </ul>
        </div>
        <div>
          <h3>Network</h3>
          <ul>
            <li>ネットワークはなぜつながるのか</li>
            <li>Real World HTTP</li>
            <li>マスタリング TCP/IP</li>
          </ul>
        </div>
        <div>
          <h3>Container</h3>
          <ul>
            <li>Kubernetes完全ガイド</li>
            <li>Docker実践ガイド</li>
          </ul>
        </div>
        <div>
          <h3>Security</h3>
          <ul>
            <li>暗号技術入門</li>
            <li>OAuth徹底入門</li>
            <li>安全なWebアプリケーションの作り方</li>
          </ul>
        </div>
        <div>
          <h3>Algorithm</h3>
          <ul>
            <li>アルゴリズムとデータ構造</li>
            <li>アルゴリズムをはじめよう</li>
          </ul>
        </div>
        <div>
          <h3>Computer</h3>
          <ul>
            <li>新しいLinuxの教科書</li>
            <li>CPUの創りかた</li>
          </ul>
        </div>
      </div>
    </>
  );
};
