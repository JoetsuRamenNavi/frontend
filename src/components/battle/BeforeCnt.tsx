/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { battleDt } from "../utils/battleData";
import { rankings } from "../utils/ranking";
import { theme } from "../themes/color";
import Link from "next/link";

const BeforeCnt: NextPage = () => {
  const battle = battleDt.The1st;

  // ランキングコンテンツ
  const rankingContent = (ranking: rankingEntryStore, icon: string) => {
    return (
      <>
        <div className="w-full flex flex-col items-center">
          <div className="w-[360px] h-[310px] px-[16px] mb-[32px] relative">
            <img
              className="absolute top-[16px] right-[24px]"
              src={icon}
              alt=""
            />
            <img className="my-[16px]" src={ranking.image} alt="" />
            <span className="text-[14px] text-[#777]">{ranking.store}</span>
            <h2>
              {ranking.name} {ranking.price}円
            </h2>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <h2 className="text-center my-[24px]">前回開催の上位入賞店舗</h2>
      <div className="px-[16px] mb-[8px]">
        <p>テーマ： {battle.theme}</p>
        <p>
          開催期間：{battle.start} ~ {battle.end}
        </p>
      </div>

      {rankingContent(battle.ranking.first, rankings.gold)}
      {rankingContent(battle.ranking.second, rankings.silver)}
      {rankingContent(battle.ranking.third, rankings.bronze)}
      <div className="mt-[32px]">
        <h2 className="text-center my-[24px] ">参加方法</h2>
        <div className="w-full items-center px-[15px]">
          {/* <p className="font-bold">投票手順を図で説明</p> */}
          <div>
            <h3>一般向け</h3>
            <p>① まずは会員登録</p>
            <p>② 参加店舗から機になるラーメンを見つけて実際に食べに行く</p>
            <p>③ 食べたら、店内にあるQRコードを読み取り投票権を獲得</p>
            <p>④ 投票ページから美味しかったお店に投票</p>
          </div>
          <div className="mt-[30px]">
            <h3>店舗向け</h3>
            <p>① まずは一般と同じように店舗代表者が会員登録</p>
            <p>② 次に①で登録したアカウントを使って店舗登録(店舗の基本情報を入力)</p>
            <p>③ ラーメンバトルエントリー期間中にエントリーフォームから参加登録</p>
            <p>④ お客さんにオリジナルラーメンを食べてもらい投票してもらう</p>
            <p>⑤ 結果発表！グランプリを目指そう</p>
          </div>
        </div>
      </div>
      <div className="my-[48px] w-full h-[75px] px-[16px]">
        <Link href={"/Entry"}>
          <button
            className={`w-full h-full ${theme.main.bg} ${theme.base.text}`}
          >
            <p>エントリーする（店舗向け）</p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default BeforeCnt;
