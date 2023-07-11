/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { entryDt } from "../utils/entryData";
import { theme } from "../themes/color";

const DuringCnt: NextPage = () => {
  return (
    <>
      <h2 className="text-center my-[24px]">月間ランキング</h2>
      <div className="px-[16px] mb-[8px]">
        {entryDt.map((store, index) => (
          <div key={index} className="">
            <h3>{store.name}</h3>
            <div
              className={`h-[8px] mt-[4px] mb-[12px] ${theme.accent.bg}`}
              style={{ width: store.votes }}
            ></div>
          </div>
        ))}
      </div>

      <h2 className="text-center my-[24px]">エントリー店舗の紹介</h2>
      {entryDt.map((store, index) => (
        <div key={index} className="w-full h-[310px] px-[16px] mb-[32px]">
          <img className="my-[16px]" src={store.image} alt="" />
          <span className="text-[14px] text-[#777]">{store.name}</span>
          <h2>
            {store.name} {store.price}円
          </h2>
        </div>
      ))}

      <div className="mt-[32px]">
        <h2 className="text-center my-[24px]">参加方法</h2>
        <div className="w-full h-[200px] flex justify-center items-center bg-[#ccc]">
          <p className="font-bold">投票手順を図で説明</p>
        </div>
      </div>
    </>
  );
};

export default DuringCnt;
