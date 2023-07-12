/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { battleDt } from "../utils/battleData";
import { entryDt } from "../utils/entryData";
import { rankings } from "../utils/ranking";

const AfterCnt: NextPage = () => {
  const battle = battleDt.The1st;

  const voteLists = [];
  for (let i = 0; i < entryDt.length; i++) {
    voteLists.push(entryDt[i].votes);
  }

  // クイックソート
  const quickSort = (arr: number[]): number[] => {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
  };

  // 順位整列
  const storesRanking = quickSort(voteLists);

  // ランキング取得
  const getRanking = (rankingNum: number) => {
    return entryDt.find((entry) => entry.votes === storesRanking[rankingNum]);
  };

  // ランキングコンテンツ
  const rankingContent = (ranking: entryStore | undefined, icon: string) => {
    if (ranking != undefined) {
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
    }
  };

  return (
    <>
      <h2 className="text-center my-[24px]">結果発表</h2>
      <div className="px-[16px] mb-[8px]">
        <p>テーマ： {battle.theme}</p>
        <p>
          開催期間：{battle.start} ~ {battle.end}
        </p>
      </div>

      {rankingContent(getRanking(0), rankings.gold)}
      {rankingContent(getRanking(1), rankings.silver)}
      {rankingContent(getRanking(2), rankings.bronze)}

      <div className="px-[32px] my-[48px]">
        <p className="font-bold">ご参加ありがとうございました。</p>
        <p className="mt-[16px] font-bold">次回の開催もお楽しみに！</p>
      </div>
    </>
  );
};

export default AfterCnt;
