/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { battleDt } from "../utils/battleData";
import { rankings } from "../utils/ranking";
import { theme } from "../themes/color";
import Link from "next/link";

const BeforeCnt: NextPage = () => {
  const battle = battleDt.The1st;

  // ランキングコンテンツ
  const rankingContent = (ranking: rankingStore, icon: string) => {
    return (
      <>
        <div className="w-full h-[310px] px-[16px] mb-[32px] relative">
          <img className="absolute top-[8px] right-[24px]" src={icon} alt="" />
          <img className="my-[16px]" src={ranking.image} alt="" />
          <span className="text-[14px] text-[#777]">{ranking.store}</span>
          <h2>
            {ranking.name} {ranking.price}円
          </h2>
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
        <h2 className="text-center my-[24px]">参加方法</h2>
        <div className="w-full h-[200px] flex justify-center items-center bg-[#ccc]">
          <p className="font-bold">投票手順を図で説明</p>
        </div>
      </div>
      <div className="my-[48px] w-full h-[75px] px-[16px]">
        <Link href={"/"}>
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
