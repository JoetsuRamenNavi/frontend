import AfterCnt from "@/components/battle/AfterCnt";
import BeforeCnt from "@/components/battle/BeforeCnt";
import DuringCnt from "@/components/battle/DuringCnt";
import Layout from "@/components/layouts/Layout";
import TopHeader from "@/components/topContent/TopHeader";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  // ----最後に消す (start)------
  const [flgEvent, setFlgEvent] = useState(0);

  const eventButton = (text: string, flg: number) => {
    return (
      <button
        onClick={() => {
          setFlgEvent(flg);
        }}
        className="border-[1px] p-[4px]"
      >
        {text}
      </button>
    );
  };

  const IsEvent = () => {
    if (flgEvent == 0) {
      return <BeforeCnt />;
    }
    if (flgEvent == 1) {
      return <DuringCnt />;
    }
    if (flgEvent == 2) {
      return <AfterCnt />;
    }
  };

  // ----最後に消す (end)------

  console.log(flgEvent);
  return (
    <>
      <Layout>
        {/* ----最後で消す (start)------ */}
        <div className="w-full h-[40px] flex justify-around items-center">
          {eventButton("開催前", 0)}
          {eventButton("開催中", 1)}
          {eventButton("開催後", 2)}
        </div>
        {/* ----最後で消す (end)------ */}
        <TopHeader />
        {IsEvent()}
      </Layout>
    </>
  );
};

export default Home;
