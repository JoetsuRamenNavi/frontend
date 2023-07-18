/* eslint-disable @next/next/no-img-element */
import ButtonLayout from "@/components/layouts/Button";
import Layout from "@/components/layouts/Layout";
import { entryDt } from "@/components/utils/entryData";
import { NextPage } from "next";
import { useState } from "react";

const Vote: NextPage = () => {
  const [store, setStore] = useState<entryStore>();
  const [voteFlg, setVoteFlg] = useState(0);

  const handleSetStore = (id: number) => {
    setStore(entryDt.find((store) => store.id === id));
  };

  const switchVoteLayout = () => {
    if (voteFlg === 0) {
      return voteFirstLayout;
    } else if (voteFlg === 1) {
      return voteSecondLayout;
    } else {
      return voteFinishLayout;
    }
  };

  const switchButtonLayout = () => {
    if (voteFlg === 0) {
      return voteFirstLayout;
    } else if (voteFlg === 1) {
      return voteSecondLayout;
    } else {
      return voteFinishLayout;
    }
  };

  const voteFirstLayout = (
    <div className="w-full">
      {entryDt.map((store, index) => (
        <div
          key={index}
          onClick={() => {
            handleSetStore(store.id);
            setVoteFlg(1);
          }}
          className="w-full h-[80px] flex justify-between my-[16px] bg-[#eee] p-[8px] active:bg-[#F7931E]"
        >
          <div className="">
            <p className="text-[#777] text-[14px]">{store.store}</p>
            <p className="font-bold text-[14px]">{store.name}</p>
          </div>
          <img src={store.image} alt="商品写真" />
        </div>
      ))}
    </div>
  );

  const voteSecondLayout = (
    <div className="w-full relative">
      <div className="">
        <div
          onClick={() => {
            setVoteFlg(1);
          }}
          className="w-full h-[80px] flex justify-between my-[16px] bg-[#eee] p-[8px] active:bg-[#F7931E]"
        >
          <div className="">
            <p className="text-[#777] text-[14px]">{store?.store}</p>
            <p className="font-bold text-[14px]">{store?.name}</p>
          </div>
          <img src={store?.image} alt="商品写真" />
        </div>
      </div>

      <div className="mt-[240px]">
        <div onClick={() => setVoteFlg(2)} className="mb-[48px]">
          <ButtonLayout text={"投票する"} />
        </div>
        <div onClick={() => setVoteFlg(0)}>
          <ButtonLayout text={"戻る"} />
        </div>
      </div>
    </div>
  );

  const voteFinishLayout = (
    <div className="w-full">
      <p>投票が完了しました。</p>
    </div>
  );

  return (
    <Layout>
      <div className="w-full px-[16px] min-h-[calc(100vh_-_240px)] py-[32px] flex flex-col justify-between">
        <div className="">
          <h2 className="mb-[32px]">ラーメンバトル投票</h2>
          {switchVoteLayout()}
        </div>
      </div>
    </Layout>
  );
};

export default Vote;
