/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { entryDt } from "../utils/entryData";
import { theme } from "../themes/color";
import Link from "next/link";

const DuringCnt: NextPage = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
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
          <div key={index} className="w-full flex flex-col items-center">
            <Link href={`/entry/${store.id}`}>
              <div className="w-[360px] h-[310px] px-[16px] mb-[32px]">
                <img className="my-[16px]" src={store.image} alt="" />
                <span className="text-[14px] text-[#777]">{store.name}</span>
                <h2>
                  {store.name} {store.price}円
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-[32px]">
        <h2 className="text-center my-[24px]">参加方法</h2>
        <div className="w-full items-center px-[15px]">
          {/* <p className="font-bold">投票手順を図で説明</p> */}
          <div>
            <h3>一般向け</h3>
            <p>① まずは会員登録</p>
            <p>② 参加店舗から機になるラーメンを見つけて実際に食べに行く</p>
            <p>③ 食べたら、店内にあるQRコードを読み取り投票権を獲得</p>
            <p>④ 投票ページから美味しかったお店に投票</p>
          </div>
          <div className="mt-[30px] mb-[50px]">
            <h3>店舗向け</h3>
            <p>エントリーは終了しました。</p>
            <p>次回の開催をお待ち下さい。</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DuringCnt;
